import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const SectionRadarChart = ({ exams }) => {
    let sectionScores = {};

    exams.forEach(exam => {
        if (!sectionScores[exam.section]) {
            sectionScores[exam.section] = [];
        }

        const examPercent = (exam.score / exam.questions_count) * 100;
        sectionScores[exam.section].push(examPercent);
    });

    const data = Object.entries(sectionScores).map(sectionScore => { 
        const avgPercent = sectionScore[1].reduce((sum, percent) => sum + percent, 0) / sectionScore[1].length;
        return { 
            subject: sectionScore[0],
            A: avgPercent,
            fullMark: 100
        } 
    });

    return (
      <ResponsiveContainer width={600} height={500}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis domain={[0, 100]}/>
          <Radar name="Result in %" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    );
}

export default SectionRadarChart;