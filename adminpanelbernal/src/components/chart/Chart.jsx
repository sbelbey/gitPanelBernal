import "./chart.scss";

import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Enero", Total: 1200 },
  { name: "Febrero", Total: 2100 },
  { name: "Marzo", Total: 800 },
  { name: "Abril", Total: 1600 },
  { name: "Mayo", Total: 900 },
  { name: "Junio", Total: 1700 },
];


const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f9d615" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f9d615" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="grey" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#bd0025" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart