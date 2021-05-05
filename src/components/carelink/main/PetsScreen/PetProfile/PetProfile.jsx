import React, { useEffect } from "react";
import { usePet } from '../../../../hooks/usePet';
import Pipebar from "../../../progress/Pipebar";
// import Circularbar from "../../progress/Circularbar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Review from "../Review/Review";
import LinearDeterminate from "../../../../common/LinearDeterminate";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: 'wrap'
    },
    weight: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        width: 300,
        margin: 20
    },
}));

const PetProfile = () => {
    const classes = useStyles();
    const { petSelect, setPet } = usePet();

    useEffect(() => {
        if (!petSelect) {
            setPet(0)
        }
    })


    if (!petSelect) {
        return "Loading...";
    }
    const { wash, haircut, earcleaning, teethcleaning, vaccination, deworming } = petSelect;

    const lastwash = wash[wash.length - 1]
    const lasthaircut = haircut[haircut.length - 1]
    const lastearcleaning = earcleaning[earcleaning.length - 1]
    const lastteethcleaning = teethcleaning[teethcleaning.length - 1]
    const lastvaccination = vaccination[vaccination.length - 1]
    const lastdeworming = deworming[deworming.length - 1]
    console.log(lastwash)
    // const { review} = petsUser[0]

    // console.log(
    //     fecha.toLocaleDateString("es-ES", options)
    //   );

    const sum = (clave) => {
        let date = "";
        if (clave === "wash") {
            date = lastwash ? new Date(lastwash.endDate.startDate) : new Date();
        } else if (clave === "haircut") {
            date = lasthaircut ? new Date(lasthaircut.endDate.startDate) : new Date();
        } else if (clave === "earcleaning") {
            date = lastearcleaning ? new Date(lastearcleaning.endDate.startDate) : new Date();
        } else if (clave === "teethcleaning") {
            date = lastteethcleaning ? new Date(lastteethcleaning.endDate.startDate) : new Date();
        } else if (clave === "vaccination") {
            date = lastvaccination ? new Date(lastvaccination.endDate.startDate) : new Date();
        } else if (clave === "deworming") {
            date = lastdeworming ? new Date(lastdeworming.endDate.startDate) : new Date();
        } else {
            date = new Date()
        }
        const fecha = new Date();
        const resta = date.getTime() - fecha.getTime();
        return Math.round(resta / (1000 * 60 * 60 * 24));
    }

    const subtraction = (clave) => {
        let date = "";
        if (clave === "wash") {
            date = lastwash ? new Date(lastwash.startDate.startDate) : new Date();
        } else if (clave === "haircut") {
            date = lasthaircut ? new Date(lasthaircut.startDate.startDate) : new Date();
        } else if (clave === "earcleaning") {
            date = lastearcleaning ? new Date(lastearcleaning.startDate.startDate) : new Date();
        } else if (clave === "teethcleaning") {
            date = lastteethcleaning ? new Date(lastteethcleaning.startDate.startDate) : new Date();
        } else if (clave === "vaccination") {
            date = lastvaccination ? new Date(lastvaccination.startDate.startDate) : new Date();
        } else if (clave === "deworming") {
            date = lastdeworming ? new Date(lastdeworming.startDate.startDate) : new Date();
        } else {
            date = new Date()
        }
        const fecha = new Date();
        const resta = fecha.getTime() - date.getTime();
        return Math.round(resta / (1000 * 60 * 60 * 24));
    };

    const percentage = (clave) => {
        let date = "";
        let lastdate = "";
        if (clave === "wash") {
            lastdate = lastwash ? new Date(lastwash.startDate.startDate) : new Date();
            date = lastwash ? new Date(lastwash.endDate.startDate) : new Date();
        } else if (clave === "haircut") {
            lastdate = lasthaircut ? new Date(lasthaircut.startDate.startDate) : new Date();
            date = lasthaircut ? new Date(lasthaircut.endDate.startDate) : new Date();
        } else if (clave === "earcleaning") {
            lastdate = lastearcleaning ? new Date(lastearcleaning.startDate.startDate) : new Date();
            date = lastearcleaning ? new Date(lastearcleaning.endDate.startDate) : new Date();
        } else if (clave === "teethcleaning") {
            lastdate = lastteethcleaning ? new Date(lastteethcleaning.startDate.startDate) : new Date();
            date = lastteethcleaning ? new Date(lastteethcleaning.endDate.startDate) : new Date();
        } else if (clave === "vaccination") {
            lastdate = lastvaccination ? new Date(lastvaccination.startDate.startDate) : new Date();
            date = lastvaccination ? new Date(lastvaccination.endDate.startDate) : new Date();
        } else if (clave === "deworming") {
            lastdate = lastdeworming ? new Date(lastdeworming.startDate.startDate) : new Date();
            date = lastdeworming ? new Date(lastdeworming.endDate.startDate) : new Date();
        }
        const resta = date.getTime() - lastdate.getTime();
        const total = Math.round(resta / (1000 * 60 * 60 * 24));
        const percentage = (sum(clave) * 100) / total
        return percentage
    }

    return (
        <>
            <div className={classes.root}>
                <Review />
                <Paper elevation={3} className={classes.weight}>
                    <div className='__flex __ai-center'>
                        <i className="fas fa-bath fa-3x __mt-1 __mx-1 __my-1"></i>
                    </div>
                    <h4 className='__my-1'>{subtraction('wash')} días desde el ultimo baño.</h4>
                    <LinearDeterminate petprogess={percentage('wash')} />
                    <h4 className='__my-1'>Faltan {sum('wash')} días para el siguiente.</h4>
                    <div className='__flex __ai-center'>
                        <i className="fas fa-cut fa-3x __mt-1 __mb-0 __mx-1"></i>
                    </div>
                    <h4 className='__my-1'>{subtraction("haircut")} días desde el ultimo corte.</h4>
                    <LinearDeterminate petprogess={percentage("haircut")} />
                    <h4 className='__my-1'>Faltan {sum("haircut")} días para el siguiente.</h4>
                </Paper>
                <Paper elevation={3} className={classes.weight}>
                    <div className='__flex __ai-center'>
                        <i className="fas fa-tooth fa-3x __mt-1 __mb-0 __mx-1"></i>
                    </div>
                    <h4 className='__my-1'>{subtraction("teethcleaning")} días desde la última limpieza.</h4>
                    <LinearDeterminate petprogess={percentage("teethcleaning")} />
                    <h4 className='__my-1'>Faltan {sum("teethcleaning")} días para el siguiente.</h4>
                    <div className='__flex __ai-center'>
                    <i className="fas fa-hand-sparkles fa-3x __mt-1 __mb-0 __mx-1"></i>
                    </div>
                    <h4 className='__my-1'>{subtraction("earcleaning")} días desde la limpieza de oídos.</h4>
                    <LinearDeterminate petprogess={percentage("earcleaning")} />
                    <h4 className='__my-1'>Faltan {sum("earcleaning")} días para el siguiente.</h4>
                </Paper>
                <Paper elevation={3} className={classes.weight}>
                    <div className='__flex __ai-center'>
                    <i className="fas fa-bug fa-3x __mt-1 __mb-0 __mx-1"></i>
                    </div>
                    <h4 className='__my-1'>{subtraction("teethcleaning")} días desde la última desparasitación.</h4>
                    <LinearDeterminate petprogess={percentage("teethcleaning")} />
                    <h4 className='__my-1'>Faltan {sum("teethcleaning")} días para el siguiente.</h4>
                    <div className='__flex __ai-center'>
                    <i className="fas fa-syringe fa-3x __mt-1 __mb-0 __mx-1"></i>
                    </div>
                    <h4 className='__my-1'>{subtraction("vaccination")} días desde la última vacuna.</h4>
                    <LinearDeterminate petprogess={percentage("vaccination")} />
                    <h4 className='__my-1'>Faltan {sum("vaccination")} días para el siguiente.</h4>
                </Paper>
            </div>
        </>
    );
};

export default PetProfile;
