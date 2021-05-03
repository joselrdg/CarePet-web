import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SelectInput from '../../../../common/SelectInput';
import { InputAdornment } from '@material-ui/core';
import { DatePicker, } from '@material-ui/pickers';
import { useBreeds } from '../../../../hooks/useBreed';

export default function AddressForm({ valuesField, handleTextFieldChange }) {
  const { breedsNames } = useBreeds();
const {
species,breed, sex, hair, color, sterilized,datebirth,weight,chip,name,specialpeculiarities
} = valuesField
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Reseña:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}  >
          <SelectInput value={species} handleChange={handleTextFieldChange} items={['Perro', 'Gato', 'Ave', 'Reptil', 'Anfibio', 'Otro']} itemname='species' label='Especie' />
        </Grid>
        <Grid item xs={12} sm={6}  >
        {
         breedsNames !== null ? <SelectInput value={breed} handleChange={handleTextFieldChange} items={breedsNames} itemname='breed' label='Raza' /> : 'Loading...'
        }
        </Grid>
        <Grid item xs={12} sm={3}  >
          <SelectInput value={sex} handleChange={handleTextFieldChange} items={['Macho', 'Hembra', 'Indifinido']} itemname='sex' label='Sexo' />
        </Grid>
        <Grid item xs={12} sm={3}  >
          <SelectInput value={hair} handleChange={handleTextFieldChange} items={['Corto', 'Medio', 'Largo', 'Rizo', 'Sin pelo']} itemname='hair' label='Pelo' />
        </Grid>
        <Grid item xs={12} sm={3}  >
          <SelectInput value={color} handleChange={handleTextFieldChange} items={['Abigarrado', 'Albino', 'Atigrado', 'Azul', 'Chocolate', 'Gris']} itemname='color' label='Capa' />
        </Grid>
        <Grid item xs={12} sm={3}  >
          <SelectInput value={sterilized} handleChange={handleTextFieldChange} items={['Esterilizado', 'Castrado', 'Gestación', 'Lactancia']} itemname='sterilized' label='Estado' />
        </Grid>
        <Grid item xs={12} sm={3}>
          <DatePicker
            disableFuture
            openTo="year"
            format="dd/MM/yyyy"
            label="Nacimiento"
            name='datebirth'
            views={["year", "month", "date"]}
            value={datebirth}
            onChange={handleTextFieldChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}  >
          <TextField
            label="Peso"
            value={weight.kg}
            onChange={handleTextFieldChange}
            name="weight"
            id="weight"
            InputProps={{
              startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="chip"
            name="chip"
            label="Numero de chip"
            fullWidth
            autoComplete="given-name"
            value={chip}
            onChange={handleTextFieldChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Nombre de la mascota"
            fullWidth
            autoComplete="given-name"
            value={name}
            onChange={handleTextFieldChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="specialpeculiarities"
            label="Señas particularidades"
            multiline
            name='specialpeculiarities'
            value={specialpeculiarities}
            onChange={handleTextFieldChange}
            className='addpetform__textfield'
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12}>
          <TextField
            type='file'
            id="file"
            name="file"
            fullWidth
            autoComplete="given-name"
            // value={valuesField.file}
            onChange={handleTextFieldChange}
          />
        </Grid>
    </React.Fragment>
  );
}