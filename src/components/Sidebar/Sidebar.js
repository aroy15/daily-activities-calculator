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
        </div>
    );
};

export default Sidebar;