import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1 className='site-name'><FontAwesomeIcon icon={faPersonDigging} />  Daily Activities</h1>
            <h2>Select today’s activities</h2>
        </header>
    );
};

export default Header;