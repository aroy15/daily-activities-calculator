import React, { useEffect, useState } from 'react';
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard';
import Header from '../Header/Header';
import './MainContent.css'

const MainContent = () => {
    const [activities, setActivities] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[]);

    return (
        <div className="container">
            <div className="main_content">
                <Header></Header>
                {
                    activities.map(activity => <ActivitiesCard key={activity.id} activity={activity}></ActivitiesCard>)
                }
            </div>
            <div className="sidebar">
                sidebar
            </div>
        </div>
    );
};
export default MainContent;