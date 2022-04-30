import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";

import './AllExams.css';
import ExamCard from "../ExamCard/ExamCard";
import { examService } from '../../../services/examService';
import LottieAnimation from "../../LottieAnimation";
import { errorNotification } from "../../notification";

const AllExams = () => {
  const [exams, setExams] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  const { examType } = useParams();
  const { state } = useLocation();
  const subject = state ? state.subject : null;

  useEffect(() => {
    setIsLoading(true);
    
    examService.getAll(examType, subject)
      .then(response => {
        setExams(response);
        setFilteredExams(response);
        setIsLoading(false);
      })
      .catch(() => {
        errorNotification('There is an error loading the exams. Please try again later!');
      });

  }, [examType, subject]);

  const filterExams = (event) => {
    const section = event.target.value;
    const filtered = section === 'all' ? exams : exams.filter(e => e.section === section);

    setFilteredExams(filtered);
  }

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading &&
        <section className="flex flex-col items-center">
          <h1 className="exam-heading heading capitalize">{subject} Practice Tests</h1>

          <select onChange={filterExams} name="subject-select" className="capitalize">
            <option value="all" className="capitalize" default>all</option>
            <option value={subject === 'english' ? 'reading' : 'nocalc'} className="capitalize">{subject === 'english' ? 'reading' : 'nocalc'}</option>
            <option value={subject === 'english' ? 'writing' : 'calc'} className="capitalize">{subject === 'english' ? 'writing' : 'calc'}</option>
          </select>

          <article className="tests">
            {filteredExams.length === 0 ? 'No exams yet!' : filteredExams.map(e => <ExamCard key={e.id} exam={e} subject={subject} allExams={filteredExams} setNewExams={setFilteredExams}></ExamCard>)}
          </article>

          {user?.role !== 'student' && <button className="btn px-2 mx-4 mt-10 text-xl"><Link to={`/exams/${examType}/create`}>Create Exam</Link></button>}
        </section>
      }
    </>
  );
}

export default AllExams;