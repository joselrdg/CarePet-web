import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import ReviewForm from "./ReviewForm";
import ClinicalForm from "./ClinicalForm";
import Review from "./Review";
import { createPet, editOnePetUser, getPetsUser } from "../../../../../services/PetService";
import { useUser } from "../../../../hooks/useUser";
import { usePet } from "../../../../hooks/usePet";
import DeleteDialog from "./DeleteDialog";
import { useCategory } from "../../../../hooks/useCategory";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Características", "Datos clínicos", "Review"];

function getStepContent(step, valuesField, handleTextFieldChange, handleFieldImage) {
  switch (step) {
    case 0:
      return (
        <ReviewForm
          valuesField={valuesField}
          handleTextFieldChange={handleTextFieldChange}
          handleFieldImage={handleFieldImage}
        />
      );
    case 1:
      return (
        <ClinicalForm
          valuesField={valuesField}
          handleTextFieldChange={handleTextFieldChange}
        />
      );
    case 2:
      return (
        <Review
          valuesField={valuesField}
          handleTextFieldChange={handleTextFieldChange}
        />
      );
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout({ action }) {
  const classes = useStyles();
  const { user } = useUser();
  const { petSelect, setPetsUser, setPetSelect,
    stateCategories,
    setStateCategories } = usePet();
  const { stateCategory, setCategory } = useCategory()

  const [activeStep, setActiveStep] = useState(0);
  // const [fieldImage, setFieldImage] = useState()
  const [valuesField, setValuesField] = useState({
    user: user.id,
    breed: action === 'add' ? '' : { name: petSelect.breed, id: petSelect.breedid },
    breedid: action === 'add' ? "" : petSelect.breedid,
    name: action === 'add' ? "" : petSelect.name,
    chip: action === 'add' ? "" : petSelect.chip,
    species: action === 'add' ? "" : petSelect.species,
    sex: action === 'add' ? "" : petSelect.sex,
    hair: action === 'add' ? "" : petSelect.hair,
    color: action === 'add' ? "" : petSelect.color,
    sterilized: action === 'add' ? "" : petSelect.sterilized,
    weight: { date: new Date(), kg: "" },
    datebirth: new Date(),
    familyhistory: action === 'add' ? "" : petSelect.familyhistory,
    previousdiseases: action === 'add' ? "" : petSelect.previousdiseases,
    surgeries: action === 'add' ? "" : petSelect.surgeries,
    allergies: action === 'add' ? "" : petSelect.allergies,
    origin: action === 'add' ? "" : petSelect.origin,
    habitat: action === 'add' ? "" : petSelect.habitat,
    family: action === 'add' ? "" : petSelect.family,
    file: action === 'add' ? "" : petSelect.file,
  });

  // const handleFieldImage = (event) => {
  //   const value = event.target.files[0]
  //   const formData = new FormData();
  //   formData.append('media', value)
  //   setFieldImage(formData)
  // }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleTextFieldChange = (event) => {

    let name = event.target ? event.target.name : "";
    let value = "";
    if (!event.target) {
      name = "datebirth";
      value = event;
    } else if (event.target.name === "weight") {
      value = { ...valuesField.weight, kg: event.target.value };
    } else if (event.target.type === 'file') {
      value = event.target.files[0]
    } else {
      value = event.target.value;
    }

    setValuesField({
      ...valuesField,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // let index = 0
    // if (valuesField.breed) {
    //   index = breedsNames.find((e) => { e.name.includes(valuesField.breed) })
    //   // breedId = breedsNames[index]
    // }
    const fieldsOk = {
      ...valuesField,
      breed: valuesField.breed.name ? valuesField.breed.name : '',
      breedid: valuesField.breed.id ? valuesField.breed.id : ''
    }
    console.log(fieldsOk)
    const formData = new FormData();
    Object.entries(fieldsOk).forEach(([key, value]) => {
      formData.append(key, value)
    });
    if (action === 'add') {
      const id = user.id
      createPet(formData, id).then((response) => {
        handleNext();
        setPetSelect(response)
        getPetsUser(id)
          .then((r) => {
            setPetsUser(r)
            setStateCategories({
              ...stateCategories,
              petsName: r.map((pet) => pet.name)
            })
            setCategory({
              ...stateCategory,
              folder: 0
            })
          })
      });
    } else if (action === 'edit') {
      const id = petSelect.id
      editOnePetUser(formData, id).then((response) => {
        setPetSelect(response)
        handleNext();
        getPetsUser(id)
          .then((r) => {
            setCategory({
              ...stateCategory,
              folder: 0
            })
          })
      });
    }
  };


  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Añadir mascota
          </Typography>
                </Toolbar>
            </AppBar> */}
      <main className={classes.layout}>
        <form onSubmit={onSubmit}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              {action === 'add' ? 'Añadir mascota' : 'Editar mascota'}
            </Typography>
            <Stepper activeStep={activeStep} className='__flex __fw-w'>

              {steps.map((label) => (
                <Step key={label}  className='__my-1'>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                  ¡Los datos de su mascota se han guardado correctamente!
                  </Typography>
                  <Typography variant="subtitle1">
                  Ahora puedes controlar y mejorar la salud de tu mascota gracias a Pet Vet y CarPet.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                    {getStepContent(
                      activeStep,
                      valuesField,
                      handleTextFieldChange,
                    )}
                  <div className={classes.buttons}>
                    {action === 'edit' && (<DeleteDialog className='' id={petSelect.id} />)}
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    {activeStep === steps.length - 1 ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={onSubmit}
                        className={classes.button}
                      >
                        Añadir
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        Next
                        {/* {activeStep === steps.length - 1 ? 'Place order' : 'Next'} */}
                      </Button>
                    )}
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </form>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
