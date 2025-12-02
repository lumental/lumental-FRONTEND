import { Line, LineChart } from 'recharts';



// #endregion
export default function Rate({data}) {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  );
}