import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner">
                    <img style={{padding: '5px' ,height: '90px', width: '90px'}} alt='logo' src={brain }></img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;