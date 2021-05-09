import React from "react";
import { PieChart, Pie, Cell, } from "recharts";


// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const COLORS = ["#55f9aa", "#e91e63"];

export const Circularbar = ({ data, height, innerRadius, outerRadius, cy, cx }) => {
  if (!data) {
    return 'Loading...'
  }
  return (
    <div style={{ width: "250px", height:`${height}`, position: "relative" }}>
      <PieChart width={250} height={250}
      //  onMouseEnter={this.onPieEnter}
       >      
        <Pie
          data={data}
          cx={cx}
          cy={cy}
          startAngle={180}
          endAngle={-180}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill=  {<h1>hola</h1>}
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
   
    </div>
  );
}
