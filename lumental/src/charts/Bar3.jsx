import { BarChart, Bar, CartesianGrid, YAxis } from 'recharts';

const TinyBarChart = ({ data }) => {
  return (
    <BarChart
      style={{ width: '95%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618, margin: 0, height: 100 }}
      data={data}
    >
      {/* ✔ 회색 가로선 추가 */}
      <CartesianGrid 
        stroke="#ccc" 
        strokeDasharray="0"   // 실선
        vertical={false}      // 세로선 제거
      />

      {/* ✔ 왼쪽 수치(50, 80, 110, 140, 170 등) 표시 */}
      <YAxis 
        domain={['dataMin - 5', 'dataMax + 5']}
        tick={{ fontSize: 10, fill: '#999' }} 
        axisLine={false}      // y축선 제거
        tickLine={false}      // y축 눈금선 제거
      />

      <Bar dataKey="value" fill="#FF6854" radius={[4, 4, 2, 2]} />
    </BarChart>
  );
};

export default TinyBarChart;