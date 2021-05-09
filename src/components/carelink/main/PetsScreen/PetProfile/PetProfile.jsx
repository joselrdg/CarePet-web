import React, { useEffect } from "react";
import { usePet } from '../../../../hooks/usePet';
// import Pipebar from "../../../progress/Pipebar";
// import Circularbar from "../../progress/Circularbar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Review from "../Review/Review";
import Schedule from "./Schedule";
import LinearDeterminate from "../../../../common/LinearDeterminate";
import { Circularbar } from '../../../progress/Circularbar';

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
    review: {
        margin: 20
    },
    schedule: {
        maxWidth: 100
    }
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
    const {
        wash, willwash,
        haircut, willhaircut,
        earcleaning, willearcleaning,
        willteethcleaning, teethcleaning,
        vaccination, willvaccination,
        deworming, willdeworming,
        medication, others
    } = petSelect;


    const data = [
        ...wash, ...willwash,
        ...haircut, ...willhaircut,
        ...earcleaning, ...willearcleaning,
        ...teethcleaning, ...willteethcleaning,
        ...vaccination, ...willvaccination,
        ...deworming, ...willdeworming,
        ...medication, ...others
    ]

    const datap = data.map((e, i) => { e.id = i; e.startDate = new Date(e.startDate); return e })



    const lastwash = wash[wash.length - 1] ? wash[wash.length - 1] : { startDate: new Date(2019, 11, 17) }
    const willlastwash = willwash[willwash.length - 1] ? willwash[willwash.length - 1] : { startDate: new Date(2020, 12, 17) }

    const lasthaircut = haircut[haircut.length - 1] ? haircut[haircut.length - 1] : { startDate: new Date(2019, 11, 17) }
    const willlasthaircut = willhaircut[willhaircut.length - 1] ? willhaircut[willhaircut.length - 1] : { startDate: new Date(2020, 12, 17) }

    const lastearcleaning = earcleaning[earcleaning.length - 1] ? earcleaning[earcleaning.length - 1] : { startDate: new Date(2019, 11, 17) }
    const willlastearcleaning = willearcleaning[willearcleaning.length - 1] ? willearcleaning[willearcleaning.length - 1] : { startDate: new Date(2020, 12, 17) }

    const lastteethcleaning = teethcleaning[teethcleaning.length - 1] ? teethcleaning[teethcleaning.length - 1] : { startDate: new Date(2019, 11, 17) }
    const willlastteethcleaning = willteethcleaning[willteethcleaning.length - 1] ? willteethcleaning[willteethcleaning.length - 1] : { startDate: new Date(2020, 12, 17) }

    const lastvaccination = vaccination[vaccination.length - 1] ? vaccination[vaccination.length - 1] : { startDate: new Date(2019, 11, 17) }
    const willlastvaccination = willvaccination[willvaccination.length - 1] ? willvaccination[willvaccination.length - 1] : { startDate: new Date(2020, 12, 17) }

    const lastdeworming = deworming[deworming.length - 1] ? deworming[deworming.length - 1] : { startDate: new Date(2019, 11, 17) }
    const willlastdeworming = willdeworming[willdeworming.length - 1] ? willdeworming[willdeworming.length - 1] : { startDate: new Date(2020, 12, 17) }

    // const { review} = petsUser[0]
  

    const sum = (clave) => {
        let date = "";
        if (clave === "wash") {
            date = willlastwash ? new Date(willlastwash.startDate) : new Date();
        } else if (clave === "haircut") {
            date = willlasthaircut ? new Date(willlasthaircut.startDate) : new Date();
        } else if (clave === "earcleaning") {
            date = willlastearcleaning ? new Date(willlastearcleaning.startDate) : new Date();
        } else if (clave === "teethcleaning") {
            date = willlastteethcleaning ? new Date(willlastteethcleaning.startDate) : new Date();
        } else if (clave === "vaccination") {
            date = willlastvaccination ? new Date(willlastvaccination.startDate) : new Date();
        } else if (clave === "deworming") {
            date = willlastdeworming ? new Date(willlastdeworming.startDate) : new Date();
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
            date = lastwash ? new Date(lastwash.startDate) : new Date();
        } else if (clave === "haircut") {
            date = lasthaircut ? new Date(lasthaircut.startDate) : new Date();
        } else if (clave === "earcleaning") {
            date = lastearcleaning ? new Date(lastearcleaning.startDate) : new Date();
        } else if (clave === "teethcleaning") {
            date = lastteethcleaning ? new Date(lastteethcleaning.startDate) : new Date();
        } else if (clave === "vaccination") {
            date = lastvaccination ? new Date(lastvaccination.startDate) : new Date();
        } else if (clave === "deworming") {
            date = lastdeworming ? new Date(lastdeworming.startDate) : new Date();
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
            lastdate = lastwash ? new Date(lastwash.startDate) : new Date();
            date = willlastwash ? new Date(willlastwash.startDate) : new Date();
        } else if (clave === "haircut") {
            lastdate = lasthaircut ? new Date(lasthaircut.startDate) : new Date();
            date = willlasthaircut ? new Date(willlasthaircut.startDate) : new Date();
        } else if (clave === "earcleaning") {
            lastdate = lastearcleaning ? new Date(lastearcleaning.startDate) : new Date();
            date = willlastearcleaning ? new Date(willlastearcleaning.startDate) : new Date();
        } else if (clave === "teethcleaning") {
            lastdate = lastteethcleaning ? new Date(lastteethcleaning.startDate) : new Date();
            date = willlastteethcleaning ? new Date(willlastteethcleaning.startDate) : new Date();
        } else if (clave === "vaccination") {
            lastdate = lastvaccination ? new Date(lastvaccination.startDate) : new Date();
            date = willlastvaccination ? new Date(willlastvaccination.startDate) : new Date();
        } else if (clave === "deworming") {
            lastdate = lastdeworming ? new Date(lastdeworming.startDate) : new Date();
            date = willlastdeworming ? new Date(willlastdeworming.startDate) : new Date();
        }
        const resta = date.getTime() - lastdate.getTime();
        const total = Math.round(resta / (1000 * 60 * 60 * 24));
        const percentage = (sum(clave) * 100) / total
        return percentage
    }

    const datachart = (thisstartDate, thisendDate) => {
        // dias que llevamos
        const fecha = new Date();
        const fechaGetTime = fecha.getTime();

        const lastdate = thisstartDate ? new Date(thisstartDate) : new Date();
        const date = thisendDate ? new Date(thisendDate) : new Date();

        let resta = date.getTime() - fechaGetTime;
        const daysMas = Math.round(resta / (1000 * 60 * 60 * 24));

        resta = fechaGetTime - lastdate.getTime();
        // const daysMenos = Math.round(resta / (1000 * 60 * 60 * 24));


        resta = date.getTime() - lastdate.getTime();
        const total = Math.round(resta / (1000 * 60 * 60 * 24));
        const percentage = (daysMas * 100) / total
        return [
            { name: "Group A", value: percentage },
            { name: "Group B", value: 100 - percentage },
        ];
    }

    return (
        <>
            <div className={classes.root}>
                <Paper elevation={3} className={classes.review}>
                    <Review />
                </Paper>
                <Paper elevation={3} className={classes.review}>
                    <Schedule className='__schedule' datap={datap} />
                </Paper>
                <Paper elevation={3} className={classes.weight}>
                    <div className='__flex __jc-center'>
                        <i className="fas fa-bath fa-3x __mt-1 __mx-1 __my-1 __icon-light"></i>
                        <Circularbar
                                cx={180}                            
                                cy={40}
                                outerRadius={30}
                                innerRadius={18}
                                height='80px'
                                data={datachart(lastwash.startDate, willlastwash.startDate)} />
                    </div>
                    <h4 className='__my-1'>{subtraction('wash')} días desde el ultimo baño.</h4>
                    <LinearDeterminate petprogess={percentage('wash')} />
                    <h4 className='__my-1'>Faltan {sum('wash') > 0 ? sum('wash'):0} días para el siguiente.</h4>
                    <div className='__flex __ai-center'>
                        <i className="fas fa-cut fa-3x  __mt-1 __mx-1 __my-1 __icon-light"></i>
                         <Circularbar
                                cx={180}                            
                                cy={40}
                                outerRadius={30}
                                innerRadius={18}
                                height='80px'
                                data={datachart(lasthaircut.startDate, willlasthaircut.startDate)} />
                    </div>
                    <h4 className='__my-1'>{subtraction("haircut")} días desde el ultimo corte.</h4>
                    <LinearDeterminate petprogess={percentage("haircut")} />
                    <h4 className='__my-1'>Faltan {sum("haircut") > 0 ? sum('haircut'):0} días para el siguiente.</h4>
                </Paper>
                <Paper elevation={3} className={classes.weight}>
                    <div className='__flex __ai-center'>
                        <i className="fas fa-tooth fa-3x __mt-1 __mb-0 __mx-1 __icon-light"></i>
                        <Circularbar
                                cx={180}                            
                                cy={40}
                                outerRadius={30}
                                innerRadius={18}
                                height='80px'
                                data={datachart(lastteethcleaning.startDate, willlastteethcleaning.startDate)} />
                    </div>
                    <h4 className='__my-1'>{subtraction("teethcleaning")} días desde la última limpieza.</h4>
                    <LinearDeterminate petprogess={percentage("teethcleaning")} />
                    <h4 className='__my-1'>Faltan {sum("teethcleaning") > 0 ? sum('teethcleaning'):0} días para el siguiente.</h4>
                    <div className='__flex __ai-center'>
                        <i className="fas fa-hand-sparkles fa-3x __mt-1 __mb-0 __mx-1 __icon-light"></i>
                        <Circularbar
                                cx={180}                            
                                cy={40}
                                outerRadius={30}
                                innerRadius={18}
                                height='80px'
                                data={datachart(lastearcleaning.startDate, willlastearcleaning.startDate)} />
                    </div>
                    <h4 className='__my-1'>{subtraction("deworming")} días desde la limpieza de oídos.</h4>
                    <LinearDeterminate petprogess={percentage("deworming")} />
                    <h4 className='__my-1'>Faltan {sum("deworming") > 0 ? sum('deworming'):0} días para el siguiente.</h4>
                </Paper>
                <Paper elevation={3} className={classes.weight}>
                    <div className='__flex __ai-center'>
                        <i className="fas fa-bug fa-3x __mt-1 __mb-0 __mx-1 __icon-light"></i>
                        <Circularbar
                                cx={180}                            
                                cy={40}
                                outerRadius={30}
                                innerRadius={18}
                                height='80px'
                                data={datachart(lastteethcleaning.startDate, willlastteethcleaning.startDate)} />
                    </div>
                    <h4 className='__my-1'>{subtraction("teethcleaning")} días desde la última desparasitación.</h4>
                    <LinearDeterminate petprogess={percentage("teethcleaning")} />
                    <h4 className='__my-1'>Faltan {sum("teethcleaning") > 0 ? sum('teethcleaning'):0} días para el siguiente.</h4>
                    <div className='__flex __ai-center'>
                        <i className="fas fa-syringe fa-3x __mt-1 __mb-0 __mx-1 __icon-light"></i>
                         <Circularbar
                                cx={180}                            
                                cy={40}
                                outerRadius={30}
                                innerRadius={18}
                                height='80px'
                                data={datachart(lastvaccination.startDate, willlastvaccination.startDate)} />
                    </div>
                    <h4 className='__my-1'>{subtraction("vaccination")} días desde la última vacuna.</h4>
                    <LinearDeterminate petprogess={percentage("vaccination") > 0 ? sum('vaccination'):0} />
                    <h4 className='__my-1'>Faltan {sum("vaccination")} días para el siguiente.</h4>
                </Paper>
            </div>
        </>
    );
};

export default PetProfile;
