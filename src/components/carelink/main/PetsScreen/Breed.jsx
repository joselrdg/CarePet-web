import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getBreed } from '../../../../services/BreedService';
import ImgMediaCard from '../../../common/ImgMediaCard';
import { usePet } from '../../../hooks/usePet';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleCard from '../../../common/SimpleCardTwo';
import { useBreeds } from '../../../hooks/useBreed';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 20,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Breed() {
    const classes = useStyles();
    const { petSelect } = usePet();
    const [oneBreed, setOneBreed] = useState(null);
    const { breedsNames } = useBreeds();
    const breedName = petSelect.review.breed


    useEffect(() => {
        let id = petSelect.review.breed.id
        getBreed(id).then((response) => { setOneBreed(response) })
    }, [petSelect.review.breed.id]);



    if (!oneBreed) {
        return 'Loading...'
    }
    const { raza,
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
    } = oneBreed



    if (!raza) {
        return 'Loading...'
    }
    const nameOne = raza[0]
    let nameTwo = null
    if (raza.length > 1) {
        nameTwo = raza[1]
    }




    console.log(oneBreed)
    return (
        <div className='__flex __fw-w'>
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
                        <Typography variant="body2" component="p">
                            Grupo: {grupo}
                            <br />
                            Origen: {origen}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {
                historia &&
                <SimpleCard item='Historia' text={historia} />
            }
            {
                utilizado &&
                <SimpleCard item='Utilizado' text={utilizado} />
            }
            {
                comportamiento &&
                <SimpleCard item='Comportamiento' text={comportamiento} />
            }
            {
                movimiento &&
                <SimpleCard item='Movimiento' text={movimiento} />
            }
            {
                tamano &&
                <SimpleCard item='Tamaño' text={tamano} />
            }
            {
                apariencia &&
                <SimpleCard item='Apariencia' text={apariencia} />
            }
            {
                color &&
                <SimpleCard item='Color' text={color} />
            }
            {
                piel &&
                <SimpleCard item='Piel' text={piel} />
            }
            {
                pelo &&
                <SimpleCard item='Pelo' text={pelo} />
            }
            {
                cabeza &&
                <SimpleCard item='Cabeza' text={cabeza} />
            }
            {
                facial &&
                <SimpleCard item='Facial' text={facial} />
            }
            {
                craneal &&
                <SimpleCard item='Craneo' text={craneal} />
            }
            {
                ojos &&
                <SimpleCard item='Ojos' text={ojos} />
            }
            {
                orejas &&
                <SimpleCard item='Orejas' text={orejas} />
            }
            {
                cuello &&
                <SimpleCard item='Cuello' text={cuello} />
            }
            {
                cuerpo &&
                <SimpleCard item='Cuerpo' text={cuerpo} />
            }
            {
                eanteriores &&
                <SimpleCard item='Extremidades anteriores' text={eanteriores} />
            }
            {
                eposteriores &&
                <SimpleCard item='Extremidades posteriores' text={eposteriores} />
            }

        </div>
    )
}