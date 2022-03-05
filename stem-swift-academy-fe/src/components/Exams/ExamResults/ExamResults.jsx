import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { examService } from '../../../services/examService';

import ResultsChart from './ResultsChart';
import LottieAnimation from '../../LottieAnimation';

import './ExamResults.css';
import { errorNotification } from '../../notification';

const ExamResults = () => {
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { subject, examId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    examService.getScore(subject, examId)
      .then(response => {
        setScore(response.data.score);
        setIsLoading(false);
      })
      .catch(error => {
        errorNotification('There is an error with processing your answers. Please try again later!');
      })
  }, [subject, examId]);


  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section className="flex flex-col justify-center items-center">
          <h1 className="heading">Your result: {score} / 10</h1>

          <ResultsChart score={score} className="relative"></ResultsChart>
          <h1 className="heading result-heading">{score / 10 * 100}%</h1>
        </section>
      }
    </>
  );
}

export default ExamResults;