import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SelectInput from '../../../../common/SelectInput';

export default function ClinicalForm({ valuesField, handleTextFieldChange }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos clinicos
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}  >
          <SelectInput value={valuesField.origin} handleChange={handleTextFieldChange} items={['Urbano', 'Rural']} itemname='origin' label='Origen' />
        </Grid>
        <Grid item xs={12} sm={4}  >
          <SelectInput value={valuesField.habitat} handleChange={handleTextFieldChange} items={["Interior", "Exterior", "Reala", "Criadero", "Finca", "Taller", 'Otro']} itemname='habitat' label='Habitat' />
        </Grid>
        <Grid item xs={12} sm={4}  >
          <SelectInput value={valuesField.family} handleChange={handleTextFieldChange} items={["Familia", 'Criador', 'Reala', 'Habandonado']} itemname='family' label='Familia' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="allergies"
            label="Alergias"
            multiline
            name='allergies'
            value={valuesField.allergies}
            onChange={handleTextFieldChange}
            className='addpetform__textfield'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="surgeries"
            label="Cirugías previas"
            multiline
            name='surgeries'
            value={valuesField.surgeries}
            onChange={handleTextFieldChange}
            className='addpetform__textfield'
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="previousdiseases"
            label="Enfermedades previas"
            multiline
            name='previousdiseases'
            value={valuesField.previousdiseases}
            onChange={handleTextFieldChange}
            className='addpetform__textfield'
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="familyhistory"
            label="Antecedentes familiares"
            multiline
            name='familyhistory'
            value={valuesField.familyhistory}
            onChange={handleTextFieldChange}
            className='addpetform__textfield'
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}