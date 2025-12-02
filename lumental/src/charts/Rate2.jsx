import { Line, LineChart, CartesianGrid, YAxis } from 'recharts';



// #endregion
export default function Rate({data}) {
  return (
    <LineChart
      style={{ width: '90%', maxWidth: '300px', maxHeight: '150px', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
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

      <Line type="monotone" dataKey="value" stroke="#FF6854" strokeWidth={2} />
    </LineChart>
  );
}