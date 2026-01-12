import { Line, LineChart, CartesianGrid, YAxis, ResponsiveContainer } from 'recharts';

export default function Rate({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        // [수정 포인트 1] left를 음수가 아닌 0이나 10으로 설정해 주세요.
        // 숫자가 잘리지 않으려면 최소 0은 되어야 합니다.
        // right는 오른쪽 끝 점이 잘리지 않도록 15~20 정도 줍니다.
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
          // [수정 포인트 2] Y축 숫자가 들어갈 너비입니다.
          // 세 자리 숫자(165 등)가 안 잘리려면 30~35 정도가 적당합니다.
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