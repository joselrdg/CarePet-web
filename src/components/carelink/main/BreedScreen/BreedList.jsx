import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CardBreed from './CardBreed'
import TablePagination from '@material-ui/core/TablePagination';
import { useBreeds } from "../../../hooks/useBreed";



const BreedList = () => {
    // const { breeds, getBreeds } = useBreeds();
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    // console.log(breeds)
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <>
            <h1>Breeds List</h1>
            <div className=''>
                <CardBreed />
                <TablePagination
                    component="div"
                    count={10}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </div>
        </>
    );
};

export default BreedList;

