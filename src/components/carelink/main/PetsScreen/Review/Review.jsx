import React from 'react';
import SimpleCard from '../../../../common/SimpleCard';
import { usePet } from '../../../../hooks/usePet';


export default function Review() {
    const { petSelect } = usePet()
    const { name, breed, breedid, chip, hair, color, specialpeculiarities, sex, origin, family, habitat, file, datebirth } = petSelect
    return (
        <div>
            <SimpleCard 
            name={name} 
            breed={breed} 
            breedid={breedid} 
            chip={chip} 
            hair={hair} 
            color={color} 
            specialpeculiarities={specialpeculiarities} 
            sex={sex} 
            origin={origin}
            family={family}
            habitat={habitat}
            file={file}
            datebirth={datebirth}
            />
        </div>
    )
}