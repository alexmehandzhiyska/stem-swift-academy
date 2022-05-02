import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';

import { examService } from '../../../services/examService';
import { errorNotification } from '../../notification';
import LottieAnimation from '../../LottieAnimation';

import ResultsChart from './ResultsChart';
import QuestionResult from './QuestionResult';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './ExamResults.css';

const ExamResults = () => {
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const { state } = useLocation();
  const userAnswers = state.userAnswers;

  const { examType, examId } = useParams();

  useEffect(() => Aos.init({ duration: 500 }), []);

  useEffect(() => {
    examService.getScore(examType, examId)
      .then(response => {
        setScore(response);
      })
      .catch(() => {
        errorNotification('There is an error with processing your answers. Please try again later!');
      })
  }, [examType, examId]);

  useEffect(() => {
    setIsLoading(true);

    examService.getQuestions(examType, examId, false)
      .then(response => {
        setQuestions(response);
        setIsLoading(false);
      })
      .catch(() => {
        errorNotification('There was an error loading the questions! Please try again later!');
      });
  }, [examType, examId]);

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <>
          <section data-aos="fade-in" className="flex flex-col justify-center items-center">
            <h1 className="heading">Your result: {score} / {questions.length}</h1>

            <ResultsChart score={score} className="relative"></ResultsChart>
            <h1 className="heading result-heading">{score / questions.length * 100}%</h1>
          </section>

          <section data-aos="fade-in" className="mb-20">
            <h1 className="heading">Your Answers</h1>

            {questions.map((question, i) => <QuestionResult key={question.id} number={i + 1} question={question} userAnswer={userAnswers[i + 1]} />)}
          </section>
        </>
      }
    </>
  );
}

export default ExamResults;