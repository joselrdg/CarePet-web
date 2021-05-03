import React, { useEffect, useState } from "react";
import CardBreed from './CardBreed'
import TablePagination from '@material-ui/core/TablePagination';
import { getBreedsGroup } from "../../../../services/BreedService";



const Groups = () => {
    const [groupBreeds, setGroupBreedsFci] = useState();
    const [numGroup, setNumGroup] = useState(0);

    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        return getBreedsGroup(numGroup, page, rowsPerPage).then((response) => setGroupBreedsFci(response));
    }, [numGroup, page, rowsPerPage]);


    if (!groupBreeds) {
        return "Loading...";
    }


    return (
        <>
            <h1>Grupos</h1>
            <div className=''>
                {
                    groupBreeds.docs.map((breed, i) => (
                        <CardBreed key={i} {...breed}/>
                    ))
                }

            </div>
            <TablePagination
                component="div"
                count={groupBreeds.totalDocs}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />


        </>
    );
};

export default Groups;