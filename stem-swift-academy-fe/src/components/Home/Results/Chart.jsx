import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Reading',
    percent: 82,
  },
  {
    name: 'Writing',
    percent: 88,
  },
  {
    name: 'No calculator Math',
    percent: 96,
  },
  {
    name: 'Calculator Math',
    percent: 85,
  }
];

const Chart = () => {
  return (
    <div className="my-10 flex justify-center">
      <ResponsiveContainer width="65%" height="60%" aspect={1.75}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 40,
            bottom: 10,
          }}
          barSize={50}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="percent" fill="#3B82F6" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;