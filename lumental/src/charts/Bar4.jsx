import { BarChart, Bar } from 'recharts';

// #endregion
const TinyBarChart2 = ({data}) => {
  return (
    <BarChart
      style={{ width: '95%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618, margin: 0, height: 100, }}
      responsive
      data={data}
    >
      <Bar dataKey="value" fill="#FFAC19" radius={[4, 4, 2, 2]} />
    </BarChart>
  );
};

export default TinyBarChart2;