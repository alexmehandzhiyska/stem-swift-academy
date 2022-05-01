import { useMemo } from 'react';
import AvgResultChart from './AvgResultChart';

const ExamStatistics = ({ type, exams, totalQuestions }) => {
  const avgScore = useMemo(() => exams.reduce((sum, exam) => sum + exam.score, 0) / exams.length, [exams]);
  const avgPercent = (avgScore / 10) * 100;
  
  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="uppercase mt-10 text-2xl font-semibold">{type}</h1>

        <AvgResultChart exams={exams} avgScore={avgScore}></AvgResultChart>

        <article>
          {type === 'sat' && 
            <h2 className="mt-10 text-left text-lg">Predicted Score: {400 + avgPercent * 12}</h2>
          }
          <h2 className="mt-2 text-left text-lg">Average Result: {avgPercent} %</h2>
          <h2 className="mt-2 text-left text-lg">Total Questions: {totalQuestions}</h2>
        </article>
      </section>
    </>
  );
}

export default ExamStatistics;