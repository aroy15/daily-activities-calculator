import React from 'react';
import './ActivitiesCard.css';

const ActivitiesCard = ({activity}) => {
    const {id,workName,time,image} = activity;
    return (
        <div className='card'>
            <img src={image} alt={workName} />
            <h3>{workName}</h3>
            <p>Time required: {time}m</p>
            <button className='card-btn'>Add to list</button>
        </div>
    );
};

export default ActivitiesCard;