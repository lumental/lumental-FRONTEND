import { BarChart, Bar, CartesianGrid, YAxis, ResponsiveContainer } from 'recharts';

const TinyBarChart2 = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
      >
        <CartesianGrid
          stroke="#ccc"
          strokeDasharray="0"
          vertical={false}
        />

        <YAxis
          domain={['dataMin - 5', 'dataMax + 5']}
          tick={{ fontSize: 10, fill: '#999' }}
          axisLine={false}
          tickLine={false}
          width={35}
        />

   
        <Bar dataKey="value" fill="#FFAC19" radius={[4, 4, 2, 2]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TinyBarChart2;