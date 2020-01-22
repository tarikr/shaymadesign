import React from 'react';
import './homepage.styles.scss';

//functional component because no lifecycle methods needed tat this time
//nor we dont need any state 
const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu" >
            <div className="menu-item">
                <div className='content'>
                    <h1 className='title'>Hats</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className='content'>
                    <h1 className='title'>Jackets</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className='content'>
                    <h1 className='title'>Women</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className='content'>
                    <h1 className='title'>Hats</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className='content'>
                    <h1 className='title'>Shoes</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>

)

export default HomePage;