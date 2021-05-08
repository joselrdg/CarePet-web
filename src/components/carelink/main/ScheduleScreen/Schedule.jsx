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

const messages = {
  detailsLabel: 'Título',
  titleLabel: 'Título',
  moreInformationLabel: 'Notas',
  repeatLabel: 'Repetir',
  allDayLabel: 'Día completo',
  notesLabel: 'Notas',
  daily: 'Diario',
  weekly: 'Semanal',
  monthly: 'Mensual',
  yearly: 'Anual',
  repeatEveryLabel: 'Repetir cada',
  daysLabel: 'dia(s)',
  endRepeatLabel: 'Terminar',
  never: 'Nunca',
  onLabel: 'En',
  occurrencesLabel: 'Repeticion(es)',
  afterLabel: 'El día',
  commitCommand: <i class="fas fa-save  fa-2x"></i>,
};

const messagesdiag = {
  discardButton: 'Descartar',
  deleteButton: 'Eliminar',
  cancelButton: 'Cancelar',
  confirmDeleteMessage: '¿Estás seguro de que deseas eliminar esta cita?',
  confirmCancelMessage: '¿Descartar los cambios sin guardados?',
}


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
            { id: 'medication', text: 'Medicación' },
            { id: 'wash', text: 'Baño realizado' },
            { id: 'willwash', text: 'Siguiente baño' },
            { id: 'haircut', text: 'Corte de pelo' },
            { id: 'willhaircut', text: 'Siguiete corte de pelo' },
            { id: 'earcleaning', text: 'Limpieza de oídos' },
            { id: 'willearcleaning', text: 'Siguiente limpieza de oídos' },
            { id: 'deworming', text: 'Desparasitación' },
            { id: 'willdeworming', text: 'Siguiente desparasitación' },
            { id: 'teethcleaning', text: 'Limpieza bucal' },
            { id: 'willteethcleaning', text: 'Siguiente limpieza bucal' },
            { id: 'vaccination', text: 'Vacunación' },
            { id: 'willvaccination', text: 'Siguiente vacunación' },
            { id: 'vet', text: 'Revisión anual' },
          ],
        },
        // {
        //   fieldName: 'members',
        //   title: 'Salud',
        //   allowMultiple: true,
        //   instances: [
        //     { id: 'vet', text: 'Revisión anual' },
        //     { id: 'teethcleaning', text: 'Limpieza bucal' },
        //     { id: 'willteethcleaning', text: 'Siguiente limpieza bucal' },
        //     { id: 'vaccination', text: 'Vacunación' },
        //     { id: 'willvaccination', text: 'Siguiente vacunación' },
        //   ],
        // },
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
    this.editPetSchedule = props.editPetSchedule
    this.deletePetSchedule = props.deletePetSchedule
    this.idp = props.idp
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
    let databd = {}
    this.setState((state) => {
      let { data } = state;
      if (added) {
        added = { ...added }
        if (!added.action) {
          added.action = 'others'
        }
        databd = { [added.action]: added }
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
        this.editPet(databd, this.idp);
      }
      else if (changed) {
        data = data.map(appointment => {
          if (changed[appointment.id]) {
            databd = { ...appointment, ...changed[appointment.id] }
          }
          return (
            changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment)
        });

        this.editPetSchedule(databd, this.idp);
      } else
        if (deleted !== undefined) {
          data = data.filter((appointment) => {
            if (appointment.id === deleted) {
              databd = appointment
            }
            return appointment.id !== deleted
          });
          this.deletePetSchedule(databd, this.idp);
        }
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
    return (
      <React.Fragment>
        {/* <ResourceSwitcher
          resources={resources}
          mainResourceName={mainResourceName}
          onChange={this.changeMainResource}
        /> */}

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

              // appointmentChanges={appointmentChanges}
              // onAppointmentChangesChange={this.changeAppointmentChanges}

              editingAppointment={editingAppointment}
              onEditingAppointmentChange={this.changeEditingAppointment}
            />

            <WeekView
              startDayHour={8.5}
              endDayHour={20}
            />
            <AllDayPanel />
            <EditRecurrenceMenu />
            <ConfirmationDialog
              messages={messagesdiag}

            />
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
            <AppointmentForm
              // basicLayoutComponent={BasicLayout}
              // textEditorComponent={TextEditor}
              messages={messages}
            />
          </Scheduler>
        </Paper>
      </React.Fragment>
    );
  }
}