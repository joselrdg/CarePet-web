
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Vacunacion() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Vacunación
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Cuidados
        </Typography>
                <Typography variant="body2" component="p">
                    Entre las 6 y las 8 semanas de edad se debe vacunar al cachorro
                    frente a diversas enfermedades altamente contagiosas para su especie, algunas de ellas mortales o que provocan secuelas graves, con una dosis de
                    recuerdo algunas semanas después y sucesivas anuales en algunos casos.
                    <br />
                    Los animales adoptados en nuestro centro es posible que ya hayan
recibido alguna dosis de las vacunas más habituales utilizadas en perros.
En el momento de la adopción se le dará información al respecto para que
se la traslade a su veterinario, quien le indicará si procede revacunar, y en
qué momento.
                    <br />
                    Algunas de las enfermedades que pueden padecer los perros, y que
son prevenibles mediante la vacunación, son: parvovirosis, moquillo, hepatitis infecciosa, leptospirosis, etc
<br />
En lo que respecta a la rabia, en la Comunidad de Madrid la vacuna
resulta obligatoria para los perros durante toda su vida, debiendo aplicar la
primera dosis a los tres meses de edad.

                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}