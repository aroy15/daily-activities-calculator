import React, { useEffect, useState } from 'react';
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './MainContent.css'

const MainContent = () => {
    const [activities, setActivities] = useState([]);
    const [times,setTimes] = useState(0);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[]);
    const addToList = time =>{
        setTimes(times+time);
    }
    return (
        <div className="container">
            <div className="main_content">
                <Header></Header>
                <div className="card_wrapper">
                    {
                        activities.map(activity => <ActivitiesCard key={activity.id} activity={activity} addToList={addToList}></ActivitiesCard>)
                    }
                </div>
            </div>
            <div className="sidebar">
                <Sidebar times={times}></Sidebar>
            </div>
        </div>
    );
};
export default MainContent;