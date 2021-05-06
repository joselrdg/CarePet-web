import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Toolbar,
  TodayButton,
  DateNavigator,
  Resources,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {
  teal, indigo,
} from '@material-ui/core/colors';
import { editPetUser } from "../../../../services/PetService";

const appointments = [{
  title: 'Website Re-Design Plan',
  startDate: new Date(2018, 5, 25, 12, 35),
  endDate: new Date(2018, 5, 25, 15, 0),
  id: 0,
  members: [1, 3, 5],
  action: 'wash',
}, {
  title: 'Book Flights to San Fran for Sales Trip',
  startDate: new Date(2018, 5, 26, 12, 35),
  endDate: new Date(2018, 5, 26, 15, 0),
  id: 1,
  members: [2, 4],
  action: 'willwash',
}, {
  title: 'Install New Router in Dev Room',
  startDate: new Date(2018, 5, 27, 12, 35),
  endDate: new Date(2018, 5, 27, 15, 0),
  id: 2,
  members: [3],
  action: 'Room 3',
}, {
  title: 'Approve Personal Computer Upgrade Plan',
  startDate: new Date(2018, 5, 28, 12, 35),
  endDate: new Date(2018, 5, 28, 15, 0),
  id: 3,
  members: [4, 1],
  action: 'Room 4',
}, {
  title: 'Final Budget Review',
  startDate: new Date(2018, 5, 29, 12, 35),
  endDate: new Date(2018, 5, 29, 15, 0),
  id: 4,
  members: [5, 1, 3],
  action: 'Room 5',
}];

const styles = theme => ({
  container: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    justifyContent: 'flex-end',
  },
  text: {
    ...theme.typography.h6,
    marginRight: theme.spacing(2),
  },
});

const ResourceSwitcher = withStyles(styles, { name: 'ResourceSwitcher' })(
  ({
    mainResourceName, onChange, classes, resources,
  }) => (
    <div className={classes.container}>
      <div className={classes.text}>
        Main resource name:
      </div>
      <Select
        value={mainResourceName}
        onChange={e => onChange(e.target.value)}
      >
        {resources.map(resource => (
          <MenuItem key={resource.fieldName} value={resource.fieldName}>
            {resource.title}
          </MenuItem>
        ))}
      </Select>
    </div>
  ),
);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: props.datap,
      mainResourceName: 'action',
      currentDate: new Date(),
      resources: [
        {
          fieldName: 'action',
          title: 'Cuidados',
          instances: [
            { id: 'wash', text: 'Baño realizado' },
            { id: 'willwash', text: 'Siguiente baño' },
            { id: 'haircut', text: 'Corte de pelo' },
            { id: 'willhaircut', text: 'Siguiete corte de pelo' },
            { id: 'earcleaning', text: 'Limpieza de oídos' },
            { id: 'willearcleaning', text: 'Siguiente limpieza de oídos' },
          ],
        },
        {
          fieldName: 'members',
          title: 'Salud',
          allowMultiple: true,
          instances: [
            { id: 'vet', text: 'Revisión anual' },
            { id: 'deworming', text: 'Desparasitación' },
            { id: 'willdeworming', text: 'Siguiente desparasitación' },
            { id: 'teethcleaning', text: 'Limpieza bucal' },
            { id: 'willteethcleaning', text: 'Siguiente limpieza bucal' },         
            { id: 'vaccination', text: 'Vacunación' },
            { id: 'willvaccination', text: 'Siguiente vacunación' },
          ],
        },
      ],
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
    };
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
    this.changeMainResource = this.changeMainResource.bind(this);
    this.editPet = props.editPet
    console.log(props.datap)
  }

  changeMainResource(mainResourceName) {
    this.setState({ mainResourceName });
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
        console.log(added)
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        let databd = {}
        data = data.map(appointment => {
          if(changed[appointment.id]){
           databd = { ...appointment, ...changed[appointment.id] };}
           return (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment)
        });
          this.editPet(databd, databd._id);
          console.log(databd)
          
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      console.log(data)
      return { data };
    });
  }

  render() {
    const {  
      currentDate, 
      data, 
      resources, 
      mainResourceName, 
      addedAppointment, 
      appointmentChanges, 
      editingAppointment, 
    } = this.state;
    console.log(data)
    return (
      <React.Fragment>
        <ResourceSwitcher
          resources={resources}
          mainResourceName={mainResourceName}
          onChange={this.changeMainResource}
        />

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
              startDayHour={8.5}
              endDayHour={20}
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
            <Resources
              data={resources}
              mainResourceName={mainResourceName}
            />
            <AppointmentForm />
          </Scheduler>
        </Paper>
      </React.Fragment>
    );
  }
}