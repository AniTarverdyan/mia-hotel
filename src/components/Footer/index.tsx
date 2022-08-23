import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import logo from '../../assets/images/mia-logo.png';
import './style.css';

const Footer = () => {
  return (
    <div className='footer-content'>
      <img className='header-logo' src={logo} alt='' height='70' />
      <p>© 2022 «Mia» — отель для домашних питомцев.</p>
      <div className='mobile-number'>
        <StayCurrentPortraitIcon />
        <p> +7 939 399-93-03</p>
      </div>
    </div>
  );
};
export default Footer;
