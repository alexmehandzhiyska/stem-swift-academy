import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';


const COLORS = ['#3B82F6', '#EEDDEB', '#FFBB28', '#FF8042'];

const AvgResultChart = ({ avgPercent }) => {
  const data = [
    { name: 'Correct Answers Percent', value: avgPercent },
    { name: 'Wrong Answers Percent', value: 100 - avgPercent }
  ];

  return (
    <article className="pie-chart">
      <PieChart className="mt-10" width={600} height={300}>
        <Pie
          data={data}
          innerRadius={120}
          outerRadius={140}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </article>
  );
}

export default AvgResultChart;