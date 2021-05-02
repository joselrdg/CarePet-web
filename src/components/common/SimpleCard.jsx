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

export default function SimpleCard({ name, breed, color, hair, specialpeculiarities, sex, origin, family,habitat, chip }) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const icons = () => {
        if (sex === 'Hembra') {
            return (
                <i class="fas fa-venus"></i>
            )
        } else if (sex === 'Macho') {
            return (
                <i class="fas fa-mars"></i>
            )
        }
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                    {breed}
                </Typography>

                <Typography variant="h5" component="h2">
                    {name}{icons()}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <i class="fas fa-birthday-cake"></i>    Word of the Day
                   
        </Typography>
                <Typography variant="body2" component="p">
                    Número de chip: 
                    <br />
                    {chip}
                </Typography>
                <Typography variant="body2" component="p">
                    Tiene el pelo {hair}  y es de color {color}
                    <br />
                </Typography>
                <Typography variant="body2" component="p">
                    Como particularidades especiales tiene:
                    <br />
                    {specialpeculiarities}.
                </Typography>
                <Typography variant="body2" component="p">
                    Vive en {family}
                    <br />
                    Es de origen {origin} y duerme en {habitat}.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Datos clínicos</Button>
            </CardActions>
        </Card>
    );
}