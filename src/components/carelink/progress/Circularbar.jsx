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
      <div style={{ width: "250px", height: "250px", position: "relative" }}>
        <PieChart width={250} height={250} onMouseEnter={this.onPieEnter}>
          <h1>hola</h1>
          <Pie
            data={data}
            cx={120}
            cy={120}
            startAngle={180}
            endAngle={-180}
            innerRadius={80}
            outerRadius={100}
            fill="hola"
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
        <h1
          style={{
            position: "absolute",
          }}
        >
          hola
        </h1>
      </div>
    );
  }
}
