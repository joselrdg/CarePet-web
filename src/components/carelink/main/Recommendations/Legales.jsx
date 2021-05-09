
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

export default function Legales() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Requisitos legales
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Cuidados
        </Typography>
                <Typography variant="body2" component="p">
                En España es obligatorio que los perros y gatos
estén identifi cados mediante la implantación de un microchip.
                    <br />
                    En el caso en el que se produzca un cambio de propietario, recuerde
que es imprescindible realizar en el RIAC la correspondiente modifi cación
en los datos sobre la titularidad del mismo. Este trámite no puede realizarse
por teléfono, por lo que para ello deberá dirigirse a su veterinario
                    <br />
                    También es importante recordar que en el caso de los perros es obligatorio disponer de un seguro obligatorio sea cual sea la raza del animal.
Su compañía de seguros podrá informarle de las modalidades existentes.         
<br />
En el caso de perros pertenecientes a determinadas razas, que
muestren características morfológicas concretas, o en algunos casos que
hayan mostrado episodios de agresividad, el propietario, y aquellas personas que vayan a ocuparse de sacarlo a la calle, deberán estar en posesión
de la Licencia Administrativa para la Tenencia de Animales Potencialmente Peligrosos, habiendo de estar el animal inscrito en el Registro
de Animales Potencialmente Peligrosos del municipio en el que resida.

                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}