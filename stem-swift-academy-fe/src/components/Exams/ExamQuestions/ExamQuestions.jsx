import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { examService } from '../../../services/examService';
import { errorNotification } from '../../notification';

import * as Survey from 'survey-react';
import LottieAnimation from '../../LottieAnimation';

import '../../../../node_modules/survey-react/modern.css';
import './ExamQuestions.css'

Survey.StylesManager.applyTheme('modern');

const ExamQuestions = () => {
  const [text, setText] = useState('');
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { examType, examId } = useParams();
  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });

  useEffect(() => {
    setIsLoading(true);

    examService.getQuestions(examType, examId, true)
      .then(response => {
        console.log(response);
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
    // const userAnswers = {};
    // console.log(Object.entries(survey.data));

    // for (const entry of Object.entries(survey.data)) {
    //   const questionNum = Number(entry[0].slice(8));
    //   userAnswers[questionNum] = entry[1];
    // }

    console.log(data);
    examService.submitAnswers(examType, examId, data)
      .then(() => {
        navigate(`/exams/${examType}/${examId}/results`, { state: { userAnswers: data } });
      })
      .catch(() => {
        errorNotification('There is an error loading the questions. Please try again later!');
      });
  }

  const json = {
    startSurveyText: "Start Quiz",
    pages: [
      { questions }
    ]
  };

  const survey = new Survey.Model(json);
  survey.completeText = 'Submit';

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section className="questions flex justify-between">
          {text && <p className="text pt-10 px-8 text-lg w-1/2">{text}</p>}

          {/* <Survey.Survey className={text ? "survey" : "survey min-w-full"} model={survey} showCompletedPage={false} onComplete={submitAnswers}/> */}

          <form className={text ? "survey" : "survey min-w-full"} onSubmit={handleSubmit(submitAnswers)}>
            {questions.length == 0 ? <p>This exam still has no questions</p> : questions.map((question, i) => 
              <article key={i} className="my-10 mx-20">
                <p className="font-bold text-3xl mb-6">{i + 1}. {question.title}</p>

                {question.image_url && <img src={question.image_url}></img>}
                {question.choices.map((choice, i1) => 
                  <section key={i1} className="my-2 text-xl">
                    <input type="radio" id={choice} value={choice} {...register(`${i + 1}`)} name={`${i + 1}`}/>
                    <label htmlFor={choice} className="ml-5">{choice}</label>
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

