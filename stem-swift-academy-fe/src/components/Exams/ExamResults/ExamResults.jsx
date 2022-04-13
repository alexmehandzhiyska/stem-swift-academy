import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { examService } from '../../../services/examService';

import ResultsChart from './ResultsChart';
import LottieAnimation from '../../LottieAnimation';

import './ExamResults.css';
import { errorNotification } from '../../notification';
import QuestionResult from './QuestionResult';

const ExamResults = () => {
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const { state } = useLocation();
  const userAnswers = state.userAnswers;

  const { subject, examId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    examService.getScore(subject, examId)
      .then(response => {
        setScore(response.data.score);
        setIsLoading(false);
      })
      .catch(() => {
        errorNotification('There is an error with processing your answers. Please try again later!');
      })
  }, [subject, examId]);

  useEffect(() => {
    setIsLoading(true);

    examService.getQuestions(subject, examId, false)
      .then(response => {
        setQuestions(response.data.questions);
        setIsLoading(false);
      })
      .catch(() => {
        errorNotification('There was an error loading the questions! Please try again later!');
      });
  }, [subject, examId]);

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <>
          <section className="flex flex-col justify-center items-center">
            <h1 className="heading">Your result: {score} / {questions.length}</h1>

            <ResultsChart score={score} className="relative"></ResultsChart>
            <h1 className="heading result-heading">{score / questions.length * 100}%</h1>
          </section>

          <section className="mb-20">
            <h1 className="heading">Your Answers</h1>

            {questions.map((question, i) => <QuestionResult key={question.id} number={i + 1} question={question} userAnswer={userAnswers[i + 1]} />)}
          </section>
        </>
      }
    </>
  );
}

export default ExamResults;