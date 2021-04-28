import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CardBreed from './CardBreed'
import TablePagination from '@material-ui/core/TablePagination';
import { useBreeds } from "../../../hooks/useBreed";
import { getBreedsList } from "../../../../services/BreedService";



const BreedList = () => {
    const { breeds, setBreeds } = useState();
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

    // useEffect(() => {
    //     console.log('useefect')
    //     getBreedsList().then((r)=>{
    //         console.log( 'conseguidas razas');
    //         setBreeds(r)
    //     })
    // }, []);

    
if(breeds){console.log(breeds.docs[0])}

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

