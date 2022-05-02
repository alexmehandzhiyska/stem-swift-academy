import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';


const COLORS = ['#3B82F6', '#EEDDEB', '#FFBB28', '#FF8042'];

const ResultsChart = ({ score }) => {
  const data = [
    { name: 'Correct Answers', value: score },
    { name: 'Wrong Answers', value: 10 - score }
  ];

  return (
    <PieChart width={1200} height={600}>
      <Pie
        data={data}
        innerRadius={180}
        outerRadius={240}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      
      <Tooltip />
    </PieChart>
  );
}

export default ResultsChart;