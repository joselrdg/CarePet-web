import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
// import descarga from ''

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function ImgMediaCard({
    raza,
    apariencia,
    cabeza,
    color,
    comportamiento,
    craneal,
    cuello,
    cuerpo,
    descalificantes,
    eanteriores,
    eposteriores,
    facial,
    faltas,
    graves,
    grupo,
    historia,
    movimiento,
    ojos,
    orejas,
    origen,
    pelo,
    piel,
    tamano,
    utilizado
}) {

    const classes = useStyles();


    if (!raza) {
        return 'Loading...'
    }
    const nameOne = raza[0]
    let nameTwo = null
    if (raza.length > 1) {
        nameTwo = raza[1]
    }


    
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="./descarga.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {nameTwo ? nameTwo : nameOne}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {nameTwo ? nameOne : null}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        
        </>
    );
}