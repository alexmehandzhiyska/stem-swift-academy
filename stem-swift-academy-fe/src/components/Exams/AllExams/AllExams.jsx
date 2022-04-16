import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { examService } from '../../../services/examService';
import { errorNotification } from "../../notification";

import './AllExams.css';
import ExamCard from "../ExamCard/ExamCard";
import LottieAnimation from "../../LottieAnimation";

const AllExams = () => {
  const [exams, setExams] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { subject } = useParams();

  useEffect(() => {
    setIsLoading(true);
    examService.getAll(subject)
      .then(response => {
        setExams(response);
        setFilteredExams(response);
        setIsLoading(false);
      })
      .catch(() => {
        errorNotification('There is an error loading the exams. Please try again later!');
      });

  }, [subject]);

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
        </section>
      }
    </>
  );
}

export default AllExams;