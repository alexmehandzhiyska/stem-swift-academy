import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import { examService } from '../../../services/examService';
import { errorNotification } from '../../notification';

import LottieAnimation from '../../LottieAnimation';
import './ExamDetails.css'

const ExamDetails = () => {
  const [exam, setExam] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { examType, examId } = useParams();
  const { state } = useLocation();
  const subject = state ? state.subject : null;

  useEffect(() => {
    setIsLoading(true);

    examService.getOne(examType, examId)
      .then(response => {
        setExam(response);
        setIsLoading(false);
      })
      .catch(() => {
        errorNotification('There is an error loading the exam details. Please try again later!');
      });
  }, [examId, examType]);

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section className="section-start">
          <article className="section-header">
            <h1 className="heading">{exam.title}</h1>
            <h3 className="subheading">{exam.duration} minutes | 10 questions | <span className="capitalize">{exam.difficulty}</span> difficulty</h3>
          </article>

          <article className="directions">
            <h3 className="directions-heading mt-10">DIRECTIONS</h3>
            <p className="directions-text">{exam.instructions}</p>
          </article>

          <article className="btns">
            <Link to={`/exams/${examType}/${exam.id}/questions`}><button className="btn start-btn start-exam">Start Test</button></Link>
            <Link to={`/exams/${examType}`} state={{ subject: subject }}><button className="btn secondary-btn">Back</button></Link>
          </article>
        </section>
      }
    </>
  );
};

export default ExamDetails;