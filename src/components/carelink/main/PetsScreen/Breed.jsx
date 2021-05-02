import React, { useEffect, useState } from 'react';
import { getBreed } from '../../../../services/BreedService';
import { usePet } from '../../../hooks/usePet';

export default function Breed() {
    const { petSelect } = usePet();
  const [oneBreed, setOneBreed] = useState(null);
 const breedName = petSelect.review.breed
    useEffect(() => {
        getBreed(breedName).then((response)=>{console.log(response)})
    }, []);

    return (
        <div>
            Breed
        </div>
    )
}