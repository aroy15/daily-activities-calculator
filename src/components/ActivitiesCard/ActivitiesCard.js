import React from 'react';
import './ActivitiesCard.css';

const ActivitiesCard = ({activity, addToList}) => {
    const {id,workName,time,image} = activity;
    return (
        <div className='card'>
            <img src={image} alt={workName} />
            <h3>{workName}</h3>
            <p>Time required: {time}s</p>
            <button className='common-btn' onClick={()=>addToList(time)}>Add to list</button>
        </div>
    );
};

export default ActivitiesCard;