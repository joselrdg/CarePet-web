import React from 'react';
import SimpleCard from '../../../common/SimpleCard';
import { usePet } from '../../../hooks/usePet';


export default function Review() {
    const { petSelect } = usePet()
    const { name, breed, chip, hair, color, specialpeculiarities, sex, origin, family, habitat } = petSelect
    return (
        <div>
            <SimpleCard 
            name={name} 
            breed={breed} 
            chip={chip} 
            hair={hair} 
            color={color} 
            specialpeculiarities={specialpeculiarities} 
            sex={sex} 
            sex={sex} 
            sex={sex} 
            origin={origin}
            family={family}
            habitat={habitat}
            />
        </div>
    )
}