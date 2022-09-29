import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../../image/anjon-profile.jpg';

const Sidebar = () => {
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
                    <div className="break-item">10m</div>
                    <div className="break-item">20m</div>
                    <div className="break-item">30m</div>
                    <div className="break-item">40m</div>
                    <div className="break-item">50m</div>
                </div>
            </div>
            <div className="exercise-details">
                <h3>Exercise Details</h3>
                <div className="time-exr-br d-flex align-i-center justify-between">Exercise time <span className="times">200 minute</span></div>
                <div className="time-exr-br d-flex align-i-center justify-between">Break time <span className="times">15 minute</span></div>
            </div>
            <button className='common-btn'>Activity Completed</button>
        </div>
    );
};

export default Sidebar;