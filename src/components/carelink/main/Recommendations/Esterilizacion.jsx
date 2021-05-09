
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

export default function Esterelizacion() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Esterilización
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Cuidados
        </Typography>
                <Typography variant="body2" component="p">
                    Se trata de una intervención quirúrgica sencilla en machos y poco
                    complicada en hembras (al ser una técnica habitual en la mayoría de los
                    centros veterinarios), que se realiza con anestesia general y que consiste
                    en la extracción de los órganos reproductores.
                    <br />
                    No solo elimina el celo y previene la llegada de camadas no deseadas, disminuyendo por tanto el número de animales abandonados, sino que
evita en unos casos, y ayuda a controlar en otros, algunos problemas orgánicos (embarazos psicológicos, piometras, tumores de mama, quistes ováricos, hiperplasia prostática, tumores testiculares,…) y de conducta (marcaje,
agresividad,…)
                    <br />
                    Los animales esterilizados no presentan cambios de carácter ni se
vuelven más apáticos, y no es necesario que las hembras tengan al menos
una camada para realizarla
<br />
Si lo que le preocupa es que su animal engorde tras la intervención,
tenga en cuenta que una alimentación adecuada y ejercicio sufi ciente mantendrán a su mascota estilizada y en forma

                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}