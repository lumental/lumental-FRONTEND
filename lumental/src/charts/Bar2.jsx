import { BarChart, Bar } from 'recharts';

// #endregion
const TinyBarChart = ({data}) => {
  return (
    <BarChart
      style={{ width: '95%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618, margin: 0, height: 65, }}
      responsive
      data={data}
    >
      <Bar dataKey="value" fill="#FF6854" radius={[4, 4, 2, 2]} />
    </BarChart>
  );
};

export default TinyBarChart;