import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import { examService } from '../../../services/examService';
import LottieAnimation from '../../LottieAnimation';
import { errorNotification } from '../../notification';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './ExamQuestions.css';

const ExamQuestions = () => {
  const [text, setText] = useState('');
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { examType, examId } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });

  useEffect(() => Aos.init({ duration: 500 }), []);
  
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
        setIsLoading(false);
      });
  }, [examType, examId]);

  const submitAnswers = (data) => {
    examService.submitAnswers(examType, examId, data)
      .then(() => {
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
        <section data-aos="fade-in" className="questions flex justify-between max-h-screen">
          {text && <p className="text pt-10 px-8 text-lg w-1/2">{text}</p>}

          <form className={text ? "survey" : "survey min-w-full"} onSubmit={handleSubmit(submitAnswers)}>
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
        </section>
      }
    </>
  );
}

export default ExamQuestions;

