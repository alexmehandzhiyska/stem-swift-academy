import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
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

  const examSubmitHandler = (survey) => {
    const userAnswers = {};

    for (const entry of Object.entries(survey.data)) {
      const questionNum = Number(entry[0].slice(8));
      userAnswers[questionNum] = entry[1];
    }

    examService.submitAnswers(examType, examId, userAnswers)
      .then(() => {
        navigate(`/exams/${examType}/${examId}/results`, { state: { userAnswers: userAnswers } });
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

          <Survey.Survey className={text ? "survey" : "survey min-w-full"} model={survey} showCompletedPage={false} onComplete={examSubmitHandler} />
        </section>
      }
    </>
  );
}

export default ExamQuestions;

