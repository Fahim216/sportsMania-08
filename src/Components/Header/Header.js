import React from 'react';
import logo from '../../Components/Header/barclays-premier-league-logo-wallpaper-2014-2015.jpg';

const Header = () => {
    const style={
        height:'600px',
        width:'1400px',
        
    }
    return (
        <div>
        
        <div className='col-sm-auto col-xs-6 col-md-12'>
            <img className='col-sm-auto col-xs-6 col-md-12' style={style} src={logo} alt="" />
        
        </div>
        </div>
    );
};

export default Header;