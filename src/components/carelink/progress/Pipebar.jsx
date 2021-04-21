import React, { PureComponent } from "react";
import { PieChart, Pie, Cell,  } from "recharts";
import TodayIcon from '@material-ui/icons/Today';


const data = [
  { name: "Group A", value: 100 },
  { name: "Group B", value: 2 },
];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const COLORS = ["#55f9aa", "#e91e63"];

export default class Pipebar extends PureComponent {
  render() {
    return (
      <div className='pipebar__root'>
        <PieChart width={250} height={125} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={120}
            cy={120}
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
        <div className='pipebar__body'>
        <TodayIcon/>
        <p>Fecha</p>
        </div>
      </div>
    );
  }
}
