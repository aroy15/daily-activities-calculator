import React, { useEffect, useState } from 'react';
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
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
                <div className="card_wrapper">
                    {
                        activities.map(activity => <ActivitiesCard key={activity.id} activity={activity}></ActivitiesCard>)
                    }
                </div>
            </div>
            <div className="sidebar">
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};
export default MainContent;