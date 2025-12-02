import { BarChart, Bar, CartesianGrid, YAxis } from 'recharts';

const TinyBarChart2 = ({ data }) => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '300px', maxHeight: '200px', aspectRatio: 1.618, margin: 0, height: 150 }}
      responsive
      data={data}
    >
      {/* ✔ 사진처럼 회색 가로선만 표시 (세로선 없음) */}
      <CartesianGrid
        stroke="#ccc"
        strokeDasharray="0"
        vertical={false}
      />

      {/* ✔ 사진처럼 Y축 숫자(50, 80, 110, 140 …) 표시 */}
      <YAxis
        domain={['dataMin - 5', 'dataMax + 5']}
        tick={{ fontSize: 10, fill: '#999' }}
        axisLine={false}
        tickLine={false}
      />

      <Bar dataKey="value" fill="#FFAC19" radius={[4, 4, 2, 2]} />
    </BarChart>
  );
};

export default TinyBarChart2;