import React from 'react';
import logo from '../../../../assets/images/mia-logo.png';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import './style.css'


const Footer = () => {
    return (
        <div>
            <img className="header-logo" src={logo} alt="" height="70" />
            <p>© 2022 «Mia» — отель для домашних питомцев.</p>
            <div className='mobile-number'>
                <StayCurrentPortraitIcon />
                <p> +7 939 399-93-03</p>
            </div>
        </div>
    )
}
export default Footer;
