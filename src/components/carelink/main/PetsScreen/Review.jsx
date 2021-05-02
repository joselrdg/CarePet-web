import React from 'react';
import SimpleCard from '../../../common/SimpleCard';
import { usePet } from '../../../hooks/usePet';


export default function Review() {
    const { petSelect } = usePet()
    const { review } = petSelect
    console.log(review)
    return (
        <div>
            <SimpleCard 
            name={review.name} 
            breed={review.breed} 
            chip={review.chip} 
            hair={review.hair} 
            color={review.color} 
            specialpeculiarities={review.specialpeculiarities} 
            sex={review.sex} 
            sex={review.sex} 
            sex={review.sex} 
            origin={review.origin}
            family={review.family}
            habitat={review.habitat}
            />
        </div>
    )
}