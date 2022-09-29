import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../../image/anjon-profile.jpg';

const Sidebar = ({times}) => {    
    const [addTime, setAddTime] = useState(0);
    const breakTimes = [20,10,30,40,50];
    
    const breakTimeFunc = breakTime =>{
        setAddTime(breakTime);
    }
    return (
        <div className='sidebar-inner'>
            <div className="profile d-flex align-i-center gap-20">
                <img src={profileImage} alt="" />
                <div>
                    <h3 className='name'>Anjon Roy</h3>
                    <p className='address'><FontAwesomeIcon icon={faLocationDot} /> Chattogram, Bangladesh</p>
                </div>
            </div>
            <div className="body-info d-flex align-i-center justify-between">
                <div>
                    <div className='b-info-no'>75<span className='unit'>kg</span></div>
                    <p>Weight</p>
                </div>
                <div>
                    <div className='b-info-no'>6.5</div>
                    <p>Height</p>
                </div>
                <div>
                    <div className='b-info-no'>28<span className='unit'>yrs</span></div>
                    <p>Age</p>
                </div>
            </div>
            <div className="break-info">
                <h3>Add A Break</h3>
                <div className="break-inner d-flex align-i-center justify-between">
                    {
                        breakTimes.map((breakTime, index) => <div key={`id${index}`} onClick={()=>breakTimeFunc(breakTime)} className="break-item">{breakTime}s</div>)
                    }
                    {/* <div className="break-item">20s</div>
                    <div className="break-item">10s</div>
                    <div className="break-item">30s</div>
                    <div className="break-item">40s</div>
                    <div className="break-item">50s</div> */}
                </div>
            </div>
            <div className="activity-details">
                <h3>Activity Details</h3>
                <div className="time-exr-br d-flex gap-20 align-i-center justify-between">Activity time <span className="times">{times} second</span></div>
                <div className="time-exr-br d-flex gap-20 align-i-center justify-between">Break time <span className="times">{addTime} second</span></div>
            </div>
            <button className='common-btn'>Activity Completed</button>
        </div>
    );
};

export default Sidebar;