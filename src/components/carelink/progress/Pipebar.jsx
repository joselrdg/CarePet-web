import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 98 },
  { name: "Group B", value: 2 },
];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const COLORS = ["#55f9aa", "#e60404"];

export default class Circularbar extends PureComponent {
  render() {
    return (
        <PieChart width={400} height={200} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={120}
            cy={100}
            startAngle={180}
            endAngle={0}
            innerRadius={80}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
    );
  }
}
