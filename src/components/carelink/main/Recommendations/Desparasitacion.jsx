
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

export default function Desparasitacion() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Desparasitación
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Cuidados
        </Typography>
                <Typography variant="body2" component="p">
                    La desparasitación de perros y gatos es extremadamente importante,
                    tanto para la salud del animal, como para la de las personas que le rodeen
                    <br />
                    Antes de su adopción, y durante su estancia en nuestro Centro, el animal habrá sido desparasitado, tanto externa como internamente. A pesar de
ello, y especialmente en cachorros, es aconsejable que su veterinario realice
un análisis de heces al animal y, en caso necesario, se vuelva a desparasitar.
                    <br />
                    La desparasitación se realizará a partir de ese momento, y durante
toda la vida del animal, con la pauta que recomiende su veterinario y con los
productos que este considere apropiados.
<br />
Con carácter general, se debe cuidar la desparasitación externa del
animal para evitar pulgas y garrapatas. En el caso de los perros, durante el
periodo comprendido entre mayo y octubre deberán llevar un producto para
prevenir la leishmaniosis, enfermedad crónica y que puede resultar mortal,
producida por un parásito transmitido por la picadura de un fl ebotomo o
mosca de la arena.
<br />
En el caso de la desparasitación interna, es aconsejable cada tres
meses, especialmente en aquellos perros que puedan tener acceso a vísceras crudas de otros animales.

                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}