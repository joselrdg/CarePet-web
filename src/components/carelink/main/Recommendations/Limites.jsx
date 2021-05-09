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

export default function Limites() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                Pautas y límites
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Cuidados
        </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Buenas conductas
        </Typography>
                <Typography variant="body2" component="p">
                Una buena educación de su perro pasa necesariamente por evitar
pautas y órdenes contradictorias entre los diferentes miembros de la familia. 
          <br />
          as y órdenes contradictorias entre los diferentes miembros de la familia.
Establezca los límites por consenso. Es necesario que todos los
miembros estén de acuerdo en cuáles serán las conductas permitidas y
cuáles no, y que mantengan este criterio de forma idéntica en todo momento. Cualquier otra situación solo produce en el animal desorientación y un
grado variable de ansiedad.
<br />
No se deben crear expectativas en el animal, ya que estas le mantendrán en un estado de excitación elevado que incrementa su ansiedad y
difi culta la convivencia con él.
        </Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}