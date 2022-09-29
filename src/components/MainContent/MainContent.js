import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './MainContent.css'

const MainContent = () => {
    const [activities, setActivities] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[]);

    return (
        <div className="container">
            <div className="main_content">
                <Header></Header>
            </div>
            <div className="sidebar">
                sidebar
            </div>
        </div>
    );
};

export default MainContent;