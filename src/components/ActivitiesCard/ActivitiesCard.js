import React from 'react';
import './ActivitiesCard.css';

const ActivitiesCard = ({activity}) => {
    const {id,workName,time,image} = activity;
    return (
        <div className='card'>
            <img src={image} alt={workName} />
        </div>
    );
};

export default ActivitiesCard;