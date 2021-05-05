import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breed from '../carelink/main/PetsScreen/Review/Breed';

const useStyles = makeStyles({
    root: {
        minWidth: 330,
        maxWidth: 400,
        paddingLeft: 20
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        marginBottom: 10,
    },
    pos: {
        marginBottom: 14,
    },
    img: {
        maxWidth: 330
    },
    marg: {
        marginBottom: 8,
    }
});

export default function SimpleCard({ name, breed, color, hair, specialpeculiarities, sex, origin, family, habitat, chip, file, datebirth }) {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = React.useState(false);

 
    const handleBreed = () => {
        console.log('handlebreed')
        setOpen(!open)
    }

    const icons = () => {
        if (sex === 'Hembra') {
            return (
                <i className="fas fa-venus __px-2"></i>
            )
        } else if (sex === 'Macho') {
            return (
                <i className="fas fa-mars __px-2"></i>
            )
        }
    }
    let datePar = new Date(datebirth)
    const options = { year: "numeric", month: "long", day: "numeric" };
    datePar = datePar.toLocaleDateString("es-ES", options)

    return (
        <div className='__flex __fw-w __m-2 __jc-center'>
            <img className={classes.img} src={file} alt='profile' />
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
                        {breed}
                    </Typography>

                    <Typography variant="h5" component="h2">
                        {name}{icons()}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <i className="fas fa-birthday-cake"></i>    {datePar}
                    </Typography>
                    <Typography className={classes.marg} variant="body2" component="p">
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
                    <Button onClick={handleBreed} size="small">Raza según  Fci</Button>
                </CardActions>
            </Card>
            {open && (<Breed />)}
        </div>
    );
}