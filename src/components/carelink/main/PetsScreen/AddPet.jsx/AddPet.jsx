import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ReviewForm from './ReviewForm';
import ClinicalForm from './ClinicalForm';
import Review from './Review';
import { createPet } from '../../../../../services/PetService';
import { useUser } from '../../../../hooks/useUser';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
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
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ['Características', 'Datos clínicos', 'Review'];

function getStepContent(step, valuesField, handleTextFieldChange) {
    switch (step) {
        case 0:
            return <ReviewForm valuesField={valuesField.review} handleTextFieldChange={handleTextFieldChange} />;
        case 1:
            return <ClinicalForm valuesField={valuesField.review} handleTextFieldChange={handleTextFieldChange} />;
        case 2:
            return <Review valuesField={valuesField.review} handleTextFieldChange={handleTextFieldChange} />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout() {
    const { user } = useUser()
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [valuesField, setValuesField] = useState({
        user: user.id,
        review: {
            name: '',
            chip: '',
            species: '',
            breed: '',
            sex: '',
            hair: '',
            color: '',
            sterilized: '',
            weight: { date: new Date(), kg: '' },
            datebirth: new Date(),
            familyhistory: '',
            previousdiseases: '',
            surgeries: '',
            allergies: '',
            origin: '',
            habitat: '',
            family: '',

        }
    });

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleTextFieldChange = (event) => {
        let name = event.target.name
        let value = ''
        if (!event.target) {
            name = 'datebirth'
            value = event
        } else if (event.target.name === 'weight') {
            value = { ...valuesField.review.weight, kg: event.target.value }
        }
        else {
            value = event.target.value
        }

        setValuesField({
            ...valuesField,
            review: {
                ...valuesField.review,
                [name]: value
            },
        });
        console.log(valuesField)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        createPet(valuesField).then((response) => {
            console.log(response)
            handleNext()
        })
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
                            Añadir mascota
          </Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Thank you for your order.
                </Typography>
                                    <Typography variant="subtitle1">
                                        Your order number is #2001539. We have emailed your order confirmation, and will
                                        send you an update when your order has shipped.
                </Typography>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep, valuesField, handleTextFieldChange)}
                                    <div className={classes.buttons}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} className={classes.button}>
                                                Back
                                            </Button>
                                        )}
                                        {activeStep === steps.length - 1 ?
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={onSubmit}
                                                className={classes.button}
                                            >
                                                Añadir
                                        </Button> :
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                                className={classes.button}
                                            >
                                                Next
                                            {/* {activeStep === steps.length - 1 ? 'Place order' : 'Next'} */}
                                            </Button>
                                        }
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