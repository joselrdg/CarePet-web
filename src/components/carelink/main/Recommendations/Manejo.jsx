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

export default function Manejo() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Manejo de Conducta
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Cuidados
        </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Contacto social y lenguaje de la especie:
        </Typography>
                <Typography variant="body2" component="p">
                    El perro doméstico es un animal al que le resulta imprescindible vivir
                    en grupo, es decir, que de forma permanente precisa mantener contacto social en cantidad y calidad sufi cientes. Un perro necesita relacionarse
                    con otros individuos (perros o personas) para ser un animal equilibrado y
                    sano. Si permanece solo durante demasiado tiempo, acabará por desarrollar serios problemas de conducta como agresividad, miedo y estereotipias
                    o comportamientos compulsivos.
          <br />
          Por otro lado, aprender a conocer e interpretar correctamente el lenguaje del perro permitirá que sepamos en cada momento lo que el animal
nos intenta comunicar. Ello facilitará la convivencia, disminuirá el riesgo de
la aparición de problemas de conducta, como el miedo y la agresividad, y
prevendrá accidentes. Este aspecto es muy importante en el caso de los
niños, ya que el riesgo de recibir una mordedura por no haber sabido interpretar las señales de amenaza de un perro es muy elevado.
        </Typography>
            
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}