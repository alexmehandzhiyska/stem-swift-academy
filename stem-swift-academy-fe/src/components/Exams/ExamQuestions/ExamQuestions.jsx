import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { useForm } from 'react-hook-form';

import { examService } from '../../../services/examService';
import LottieAnimation from '../../LottieAnimation';
import { errorNotification, warningNotification } from '../../notification';
import ExamTimer from './ExamTimer';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './ExamQuestions.css';

const ExamQuestions = () => {
  const [text, setText] = useState('');
  const [remainingTime, setRemainingTime] = useState(null);
  const [hasEnded, setHasEnded] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { examType, examId } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, getValues } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });

  useEffect(() => Aos.init({ duration: 500 }), []);
  useEffect(() => document.body.classList.add('scroll-hidden'), []);
  
  useEffect(() => {
    setIsLoading(true);

    examService.getQuestions(examType, examId, true)
      .then(response => {
        setQuestions(response);
      });
  }, [examType, examId]);

  useEffect(() => {
    examService.getOne(examType, examId)
      .then(response => {
        if (response.text) {
          setText(response.text);
        }

        if (response.timed) {
          setRemainingTime(response.remainingTime);
        }

        setIsLoading(false);
      })
      .catch((err) => {
        errorNotification(err.message);
        navigate('/');
      });
  }, [examType, examId]);

  useEffect(async () => {
    if (hasEnded) {
      const data = getValues();
      submitAnswers(data);
      await warningNotification('The exam has ended. Your answers will be submitted to your teacher.')
    }
  }, [hasEnded]);
  

  const submitAnswers = (data) => {
    examService.submitAnswers(examType, examId, data)
      .then(() => {
        document.body.classList.remove('scroll-hidden')
        navigate(`/exams/${examType}/${examId}/results`, { state: { userAnswers: data } });
      })
      .catch(() => {
        errorNotification('There is an error loading the questions. Please try again later!');
      });
  }

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section data-aos="fade-in" className="questions flex flex-col">
          <article className="flex justify-between max-h-screen">
            {text && <p className="text pt-10 px-8 text-lg w-1/2">{text}</p>}

            <form className={text ? "survey" : "survey min-w-full"} onSubmit={handleSubmit(submitAnswers)}>
              {remainingTime && 
                <article className="timer flex text-xl">
                  <FontAwesomeIcon icon={faClock} className="timer-icon mr-5"></FontAwesomeIcon>
                  <ExamTimer initialTime={remainingTime} setHasEnded={setHasEnded}></ExamTimer>
                </article>
              }
              
              {questions.length === 0 ? <p>This exam still has no questions</p> : questions.map((question, i) => 
                <article key={i} className="my-20 mx-20">
                  <p className="font-bold text-xl mb-6">{i + 1}. {question.title}</p>

                  {question.image_url && <img src={question.image_url} alt="Question" className="question-img"></img>}
                  {question.choices.map((choice, i1) => 
                    <section key={i1} className="my-2 text-xl">
                      <input type="radio" id={`question${i + 1}${choice}`} value={choice} {...register(`${i + 1}`)} name={`${i + 1}`}/>
                      <label htmlFor={`question${i + 1}${choice}`} className="ml-5">{choice}</label>
                    </section>
                  )}
                </article>
              )}

              <article className="flex justify-center mb-10">
                <input type="submit" className="btn" value="Submit" />
              </article>
            </form>
          </article>
        </section>
      }
    </>
  );
}

export default ExamQuestions;

