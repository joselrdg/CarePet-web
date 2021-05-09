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

export default function Adiestramiento() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    El adiestramiento
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Cuidados
        </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Contacto social y lenguaje de la especie:
        </Typography>
                <Typography variant="body2" component="p">
                    Nuestro perro debería aprender a obedecer algunas órdenes como
                    sienta, tumba, quieto, ven, junto y suelta. Con ello encontrará que es mucho
                    más fácil controlarle, evitando, por ejemplo, que circule por la calle pegando
                    tirones de su correa.
          <br />
          Es bastante fácil educar a un perro, con un poco de comida y de paciencia. No desista de ello aunque el animal adoptado no sea un cachorro,
y si no se siente capaz de hacerlo usted mismo, pida ayuda a un educador
profesional.
<br />
En cualquier caso, es muy importante tener en cuenta que, para conseguir un perro alegre y equilibrado, esta educación ha de realizarse sobre
la base del refuerzo del buen comportamiento, y NUNCA del castigo.
        </Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}