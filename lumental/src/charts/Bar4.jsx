import { BarChart, Bar, CartesianGrid, YAxis, ResponsiveContainer } from 'recharts';

const TinyBarChart2 = ({ data }) => {
  return (
    // 1. 부모 박스에 가득 차도록 ResponsiveContainer 사용
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        // 2. margin 설정: 왼쪽 여백(left)을 0으로, 오른쪽(right)을 20 정도로 주어 균형 맞춤
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
          // 3. Y축 숫자가 표시될 공간 확보 (숫자가 잘리지 않게 함)
          width={35}
        />

        {/* barSize={20} 등을 추가하면 막대 두께를 고정할 수도 있습니다 */}
        <Bar dataKey="value" fill="#FFAC19" radius={[4, 4, 2, 2]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TinyBarChart2;