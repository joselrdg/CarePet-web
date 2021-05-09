import React, { useEffect } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import CardBreed from './CardBreed'
import TablePagination from '@material-ui/core/TablePagination';
import { useBreeds } from "../../../hooks/useBreed";




const BreedList = () => {
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    


    return (
        <>
            <h1>Breeds List</h1> 

                      <div className=''>
                       {/* {
                           breeds.docs.map((breed)=>(
                                 <CardBreed />
                           ))
                       } */}
              
            </div> 
                <TablePagination
                    component="div"
                    count={10}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
                    
          
        </>
    );
};

export default BreedList;

