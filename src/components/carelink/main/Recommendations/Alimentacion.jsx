
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

export default function Alimentacion() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    LA ALIMENTACIÓN
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Cuidados
        </Typography>
                <Typography variant="body2" component="p">
                    La dieta más apropiada para cualquier animal de compañía es un
                    alimento seco comercial adecuado para su edad y condición física. Nuestra
                    propia comida, o la comida casera que podamos cocinar expresamente para
                    ellos, muy probablemente presentarán carencias e incluso pueden provocarles trastornos digestivos. Acostúmbrele a consumir exclusivamente su
                    alimento, evitando suministrarle “regalitos” (dulces, porciones de nuestra
                    comida, etc.) que desequilibran su dieta y pueden conducir a la obesidad.
                    <br />
                    Si desea hacer un obsequio a su mascota, utilice los premios especialmente formulados que encontrará en las clínicas veterinarias o tiendas
                    especializadas.
                    <br />
                    No debemos olvidar que una pauta correcta de alimentación, a las
                    mismas horas todos los días, nos puede ayudar a mantener una regularidad que nos ayude en su educación y con ello en su adaptación a la nueva
                    familia. Los cachorros necesitan ser alimentados cuatro veces al día, espaciando cada toma unas tres o cuatro horas. A medida que el animal crece
podemos ir eliminando alguna ración, administrando 2 tomas al día cuando
son adultos (mañana y noche).
<br />
Contrariamente a la creencia ampliamente extendida de que los perros deben comer una sola vez al día y después salir a la calle a “bajar la
comida”, en el caso de los animales adultos, y especialmente en perros
grandes, es preferible que coman dos veces al día y siempre después de
los paseos, ya que esta práctica previene algunos problemas graves como
las torsiones de estómago.

                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}