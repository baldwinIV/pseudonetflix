import './banner.css';
import React from 'react';

function Banner() {
    return (
        <div className='banner' style={{ backgroundImage: "url(\"../../img/banner.jpg\")" }}>
            <div className='banner_slogen'> Todays Top 10 hits</div>
            <div className='banner_slogen2'> Kingdom of Heaven</div>

        </div >
    );
}

export default Banner;
