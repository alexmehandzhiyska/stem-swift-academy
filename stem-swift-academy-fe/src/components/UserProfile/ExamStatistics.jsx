import { useMemo } from 'react';
import AvgResultChart from './AvgResultChart';

const ExamStatistics = ({ subject, exams, totalQuestions }) => {
  const avgScore = useMemo(() => exams.reduce((sum, exam) => sum + exam.score, 0) / exams.length, [exams]);
  
  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="capitalize mt-10 text-2xl font-semibold">{subject}</h1>
        <AvgResultChart exams={exams} avgScore={avgScore}></AvgResultChart>
        <h2 className="mt-10 text-lg">Average Result: {(avgScore / 10) * 100} %</h2>
        <h2 className="text-lg">Total Questions: {totalQuestions}</h2>
      </section>
    </>
  );
}

export default ExamStatistics;