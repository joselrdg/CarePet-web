import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, } from "recharts";
import TodayIcon from '@material-ui/icons/Today';


const data = [
  { name: "Group A", value: 100 },
  { name: "Group B", value: 2 },
];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const COLORS = ["#55f9aa", "#e91e63"];

export default class Pipebar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: props.datap,

      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
    };
    this.startDate = props.startDate;
    this.endDate = props.endDate;
  }

  datap = () => {
    // dias que llevamos
    const fecha = new Date();
    const fechaGetTime = fecha.getTime();

    const lastdate = this.startDate ? new Date(this.startDate) : new Date();
    const date = this.endDate ? new Date(this.endDate) : new Date();

    let resta = date.getTime() - fechaGetTime;
    const daysMas = Math.round(resta / (1000 * 60 * 60 * 24));

    resta = fechaGetTime - lastdate.getTime();
    const daysMenos = Math.round(resta / (1000 * 60 * 60 * 24));


    resta = date.getTime() - lastdate.getTime();
    const total = Math.round(resta / (1000 * 60 * 60 * 24));
    const percentage = (daysMas * 100) / total
    return [
      { name: "Group A", value: percentage },
      { name: "Group B", value: 100 - percentage },
    ];
    // ({ percentage: percentage, rest:100 - percentage })



    // const de = new Date(this.endDate)
    // const ds = new Date(this.startDate)
    // // const newd = new Date().getTime()
    // // const sum = newd - de;
    // // const total = ds - de;
    // // const t = sum !== 0 ? (sum * 100) / total : 0


    // const fecha = new Date();
    // const restCurr = fecha.getTime() - ds.getTime();
    // const restTotal = de.getTime() - ds.getTime();
    // const days = Math.round(restCurr / (1000 * 60 * 60 * 24));
    // const daysTotal = Math.round(restTotal / (1000 * 60 * 60 * 24));

  }


  render() {
    console.log(this.datap())
    return (
      <div className='pipebar__root'>
        <PieChart width={250} height={125} onMouseEnter={this.onPieEnter}>
          <Pie
            data={this.datap()}
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
          <TodayIcon />
          <p>Fecha</p>
        </div>
      </div>
    );
  }
}
