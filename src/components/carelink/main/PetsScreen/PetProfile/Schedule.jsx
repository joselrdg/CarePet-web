import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ViewState,
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  DayView,
  Appointments,
  Toolbar,
  // DateNavigator,
  ViewSwitcher,
  AppointmentForm,
  AppointmentTooltip,
  // TodayButton,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';



export default class Schedule extends React.PureComponent {
 constructor(props) {
    super(props);

    this.state = {
      data: props.datap,
      currentDate: new Date ()
    };
  }

  render() {
    const {
      currentDate,
      data,
    } = this.state;

    return (
      <React.Fragment>
          <Paper
           className='__schedule'
           >
      <Scheduler
        data={data}
        height={362}
      >
        <ViewState
          currentDate={currentDate}
        //   currentViewName={currentViewName}
        //   onCurrentViewNameChange={setCurrentViewName}
        //   onCurrentDateChange={setCurrentDate}
        />
        <DayView
          startDayHour={7.5}
          endDayHour={19.5}
        />
        <WeekView
          startDayHour={7.5}
          endDayHour={19.5}
        />
        <AllDayPanel />
        <Appointments />
        <Toolbar
        />
        <ViewSwitcher />
        <AppointmentTooltip
          showCloseButton
        />
        {/* <AppointmentForm readOnly /> */}
      </Scheduler>
    </Paper>
      </React.Fragment>
    );
  }
}