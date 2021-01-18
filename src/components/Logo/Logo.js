import React from 'react';
import Tilt from 'react-tilt';
import ai from './artificial-intelligence.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='center ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3 ">
                    <img style={{paddingTop: '6px'}} alt='logo' src={ai}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;