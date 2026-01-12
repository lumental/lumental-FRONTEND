import { Line, LineChart, CartesianGrid, YAxis, ResponsiveContainer } from 'recharts';

export default function Rate({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
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

        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#FF6854" 
          strokeWidth={2} 
          dot={{ r: 3 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  );
}