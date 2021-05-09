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

export default function Higiene() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Higiene
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Cuidados
        </Typography>
                <Typography variant="body2" component="p">
                    Recuerde que su perro necesitará un buen cepillado, al menos una
                    vez por semana. Si lo baña de vez en cuando, utilice un champú especial
                    para perros, y en el caso de cachorros, hágalo con agua calentita, en un
                    baño con calefacción, y luego séquele bien por todas partes, con el secador. Las toallitas húmedas pueden ser una solución de emergencia en
                    determinadas ocasiones.
          <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}