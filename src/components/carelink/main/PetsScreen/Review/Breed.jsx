import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getBreed } from '../../../../../services/BreedService';
import { usePet } from '../../../../hooks/usePet';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SimpleCard from '../../../../common/SimpleCardTwo';
// import { useBreeds } from '../../../hooks/useBreed';


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
    // const { breedsNames } = useBreeds();
    // const breedName = petSelect.breed


    useEffect(() => {
        let id = petSelect.breedid
        getBreed(id).then((response) => { setOneBreed(response) })
    }, [petSelect.breedid]);



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
        eanteriores,
        eposteriores,
        facial,
        grupo,
        historia,
        movimiento,
        ojos,
        orejas,
        origen,
        pelo,
        piel,
        tamano,
        utilizado,
        // faltas,
        // graves,
        // descalificantes,
    } = oneBreed



    if (!raza) {
        return 'Loading...'
    }
    const nameOne = raza[0]
    let nameTwo = null
    if (raza.length > 1) {
        nameTwo = raza[1]
    }




    return (
        <div className='__flex __fw-w'>
            <Card className={classes.root}>
                <CardActionArea>
                    {/* <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="./descarga.jpg"
                        title="Contemplative Reptile"
                    /> */}
                    <CardContent className='__flex __fd-col __ai-center'>
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
                historia[0] &&
                <SimpleCard item='Historia' text={historia} />
            }
            {
                utilizado[0] &&
                <SimpleCard item='Utilizado' text={utilizado} />
            }
            {
                comportamiento[0] &&
                <SimpleCard item='Comportamiento' text={comportamiento} />
            }
            {
                movimiento[0] &&
                <SimpleCard item='Movimiento' text={movimiento} />
            }
            {
                tamano[0] &&
                <SimpleCard item='Tamaño' text={tamano} />
            }
            {
                apariencia[0] &&
                <SimpleCard item='Apariencia' text={apariencia} />
            }
            {
                color[0] &&
                <SimpleCard item='Color' text={color} />
            }
            {
                piel[0] &&
                <SimpleCard item='Piel' text={piel} />
            }
            {
                pelo[0] &&
                <SimpleCard item='Pelo' text={pelo} />
            }
            {
                cabeza[0] &&
                <SimpleCard item='Cabeza' text={cabeza} />
            }
            {
                facial[0] &&
                <SimpleCard item='Facial' text={facial} />
            }
            {
                craneal[0] &&
                <SimpleCard item='Craneo' text={craneal} />
            }
            {
                ojos[0] &&
                <SimpleCard item='Ojos' text={ojos} />
            }
            {
                orejas[0] &&
                <SimpleCard item='Orejas' text={orejas} />
            }
            {
                cuello[0] &&
                <SimpleCard item='Cuello' text={cuello} />
            }
            {
                cuerpo[0] &&
                <SimpleCard item='Cuerpo' text={cuerpo} />
            }
            {
                eanteriores[0] &&
                <SimpleCard item='Extremidades anteriores' text={eanteriores} />
            }
            {
                eposteriores[0] &&
                <SimpleCard item='Extremidades posteriores' text={eposteriores} />
            }

        </div>
    )
}