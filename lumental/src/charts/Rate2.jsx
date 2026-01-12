import { Line, LineChart, CartesianGrid, YAxis, ResponsiveContainer } from 'recharts'; // 1. ResponsiveContainer 추가

export default function Rate({ data }) {
  return (
    // 2. ResponsiveContainer로 감싸고 width, height를 100%로 설정
    <ResponsiveContainer width="90%" height="100%">
      <LineChart
        data={data}
        // 3. margin 설정 (핵심!: left를 -20 정도로 주어 왼쪽으로 당김, right는 잘리지 않게 여유 둠)
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
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
          width={40} // 4. Y축 너비를 고정하여 들쭉날쭉하지 않게 함
        />

        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#FF6854" 
          strokeWidth={2} 
          dot={{ r: 3 }} // 점이 너무 크면 잘릴 수 있으니 조정 (선택사항)
        />
      </LineChart>
    </ResponsiveContainer>
  );
}