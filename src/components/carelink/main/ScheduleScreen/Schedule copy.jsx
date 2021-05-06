

// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
// import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
// import {
//   Scheduler,
//   Toolbar,
//   TodayButton,
//   DateNavigator,
//   Appointments,
//   AppointmentForm,
//   AppointmentTooltip,
//   WeekView,
//   EditRecurrenceMenu,
//   AllDayPanel,
//   ConfirmationDialog,
// } from '@devexpress/dx-react-scheduler-material-ui';
// import { makeStyles } from '@material-ui/core/styles';
// import { fade } from '@material-ui/core/styles/colorManipulator';
// import {
//   teal, indigo,
// } from '@material-ui/core/colors';
// import { usePet } from '../../../hooks/usePet';

// const useStyles = makeStyles(theme => ({
//   todayCell: {
//     backgroundColor: fade(theme.palette.primary.main, 0.1),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.primary.main, 0.14),
//     },
//     '&:focus': {
//       backgroundColor: fade(theme.palette.primary.main, 0.16),
//     },
//   },
//   weekendCell: {
//     backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
//     },
//     '&:focus': {
//       backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
//     },
//   },
//   today: {
//     backgroundColor: fade(theme.palette.primary.main, 0.16),
//   },
//   weekend: {
//     backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
//   },
// }));

// const TimeTableCell = (props) => {
//   const classes = useStyles();
//   const { startDate } = props;
//   const date = new Date(startDate);

//   if (date.getDate() === new Date().getDate()) {
//     return <WeekView.TimeTableCell {...props} className={classes.todayCell} />;
//   } if (date.getDay() === 0 || date.getDay() === 6) {
//     return <WeekView.TimeTableCell {...props} className={classes.weekendCell} />;
//   } return <WeekView.TimeTableCell {...props} />;
// };

// const DayScaleCell = (props) => {
//   const classes = useStyles();
//   const { startDate, today } = props;

//   if (today) {
//     return <WeekView.DayScaleCell {...props} className={classes.today} />;
//   } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
//     return <WeekView.DayScaleCell {...props} className={classes.weekend} />;
//   } return <WeekView.DayScaleCell {...props} />;
// };

// export const Schedule = ({ datap }) => {
//   const [state, setState] = React.useState(
//     {
//       data: datap,
//       currentDate: new Date(),

//       addedAppointment: {},
//       appointmentChanges: {},
//       editingAppointment: undefined,
//     }
//   )

//   const currentDateChange = (currentDate) => { setState({ currentDate }); };

//   const changeAddedAppointment = (addedAppointment) => {
//     setState({ addedAppointment });
//   }

//   const changeAppointmentChanges = (appointmentChanges) => {
//     setState({ appointmentChanges });
//   }

//   const changeEditingAppointment = (editingAppointment) => {
//     setState({ editingAppointment });
//   }

//   const commitChanges = ({ added, changed, deleted }) => {
//     setState((state) => {
//       let { data } = state;
//       if (added) {
//         const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
//         data = [...data, { id: startingAddedId, ...added }];
//       }
//       if (changed) {
//         data = data.map(appointment => (
//           changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
//       }
//       if (deleted !== undefined) {
//         data = data.filter(appointment => appointment.id !== deleted);
//       }
//       return { data };
//     });
//   }
  
//   const {
//     currentDate, data, addedAppointment, appointmentChanges, editingAppointment,
//   } = state;
  
//   console.log(datap)
//   return (
//     <Paper>
//       <Scheduler
//         data={data}
//         height={660}
//       >
//         <ViewState
//           currentDate={currentDate}
//           onCurrentDateChange={currentDateChange}
//         />
//         <EditingState
//           onCommitChanges={commitChanges}

//           addedAppointment={addedAppointment}
//           onAddedAppointmentChange={changeAddedAppointment}

//           appointmentChanges={appointmentChanges}
//           onAppointmentChangesChange={changeAppointmentChanges}

//           editingAppointment={editingAppointment}
//           onEditingAppointmentChange={changeEditingAppointment}
//         />
//         <WeekView
//           startDayHour={9}
//           endDayHour={17}
//           timeTableCellComponent={TimeTableCell}
//           dayScaleCellComponent={DayScaleCell}
//         />
//         <AllDayPanel />
//         <EditRecurrenceMenu />
//         <ConfirmationDialog />
//         <Toolbar />
//         <DateNavigator />
//         <TodayButton />
//         <Appointments />
//         <AppointmentTooltip
//           showOpenButton
//           showDeleteButton
//         />
//         <AppointmentForm />
//       </Scheduler>
//     </Paper>
//   );
// }



// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
// import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
// import {
//   Scheduler,
//   Toolbar,
//   TodayButton,
//   DateNavigator,
//   Appointments,
//   AppointmentForm,
//   AppointmentTooltip,
//   WeekView,
//   EditRecurrenceMenu,
//   AllDayPanel,
//   ConfirmationDialog,
// } from '@devexpress/dx-react-scheduler-material-ui';
// import {
//   teal, indigo,
// } from '@material-ui/core/colors';
// import { usePet } from '../../../hooks/usePet';

// export default class Demo extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: props.data,
//       currentDate: new Date(),

//       addedAppointment: {},
//       appointmentChanges: {},
//       editingAppointment: undefined,
//     };
//     this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
//     this.commitChanges = this.commitChanges.bind(this);
//     this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
//     this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
//     this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
//     console.log(props.data)
//   }

  
//   changeAddedAppointment(addedAppointment) {
//     this.setState({ addedAppointment });
//   }

//   changeAppointmentChanges(appointmentChanges) {
//     this.setState({ appointmentChanges });
//   }

//   changeEditingAppointment(editingAppointment) {
//     this.setState({ editingAppointment });
//   }

//   commitChanges({ added, changed, deleted }) {
//     this.setState((state) => {
//       let { data } = state;
//       if (added) {
//         const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
//         data = [...data, { id: startingAddedId, ...added }];
//       }
//       if (changed) {
//         data = data.map(appointment => (
//           changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
//       }
//       if (deleted !== undefined) {
//         data = data.filter(appointment => appointment.id !== deleted);
//       }
//       console.log(data)
//       return { data };
//     });
//   }

//   render() {
//     const {
//       currentDate, data, addedAppointment, appointmentChanges, editingAppointment,
//     } = this.state;

    
//     return (
//       <Paper>
//         <Scheduler
//           data={data}
//           height={660}
//         >
//           <ViewState
//             currentDate={currentDate}
//             onCurrentDateChange={this.currentDateChange}
//           />
//           <EditingState
//             onCommitChanges={this.commitChanges}

//             addedAppointment={addedAppointment}
//             onAddedAppointmentChange={this.changeAddedAppointment}

//             appointmentChanges={appointmentChanges}
//             onAppointmentChangesChange={this.changeAppointmentChanges}

//             editingAppointment={editingAppointment}
//             onEditingAppointmentChange={this.changeEditingAppointment}
//           />
//           <WeekView
//             startDayHour={9}
//             endDayHour={17}
//           />
//           <AllDayPanel />
//           <EditRecurrenceMenu />
//           <ConfirmationDialog />
//           <Toolbar />
//           <DateNavigator />
//           <TodayButton />
//           <Appointments />
//           <AppointmentTooltip
//             showOpenButton
//             showDeleteButton
//           />
//           <AppointmentForm />
//         </Scheduler>
//       </Paper>
//     );
//   }
// }





import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Toolbar,
  TodayButton,
  DateNavigator,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import {
  teal, indigo,
} from '@material-ui/core/colors';
import { usePet } from '../../../hooks/usePet';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: props.datap,
      currentDate: new Date(),

      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
    };
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
    console.log(props.datap)
  }

  
  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges(appointmentChanges) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointment(editingAppointment) {
    this.setState({ editingAppointment });
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      console.log(deleted)
      console.log(data)
      return { data };
    });
  }

  render() {
    const {
      currentDate, data, addedAppointment, appointmentChanges, editingAppointment,
    } = this.state;

    
    return (
      <Paper>
        <Scheduler
          data={data}
          height={660}
        >
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={this.currentDateChange}
          />
          <EditingState
            onCommitChanges={this.commitChanges}

            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}

            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}

            editingAppointment={editingAppointment}
            onEditingAppointmentChange={this.changeEditingAppointment}
          />
          <WeekView
            startDayHour={9}
            endDayHour={17}
          />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    );
  }
}