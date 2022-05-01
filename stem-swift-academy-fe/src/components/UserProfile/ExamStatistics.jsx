import AvgResultChart from './AvgResultChart';
import SectionRadarChart from './SectionRadarChart/SectionRadarChart';

const ExamStatistics = ({ type, exams, totalQuestions }) => {
  const results = exams.map(exam => exam.score / exam.questions_count);
  const avgScore = results.reduce((sum, result) => sum + result, 0) / exams.length;
  const avgPercent = avgScore * 100;
  
  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="uppercase mt-10 text-2xl font-semibold">{type}</h1>

        <AvgResultChart exams={exams} avgPercent={avgPercent}></AvgResultChart>
        
        <article className="my-5">
          {type === 'sat' && 
            <h2 className="text-left text-lg">Predicted Score: {Math.round(400 + avgPercent * 12)}</h2>
          }
          <h2 className="mt-2 text-left text-lg">Average Result: {Math.round(avgPercent)} %</h2>
          <h2 className="mt-2 text-left text-lg">Total Questions: {totalQuestions}</h2>
        </article>

        {type === 'sat' && 
          <SectionRadarChart exams={exams.filter(exam => exam.type === 'sat')}></SectionRadarChart>
        }
      </section>
    </>
  );
}

export default ExamStatistics;