import { NavLink, useLocation } from 'react-router-dom';
import headerPhoto from '../../assets/images/header.webp';
import logo from '../../assets/images/mia-logo.png';
import './style.css';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <>
      <header className='header'>
        <div className='header-content'>
          <div>
            <img className='header-logo' src={logo} alt='' height='100' />
          </div>
          <div className='header-categories'>
            <ul>
              <li className={splitLocation[1] === '' ? 'active' : ''}>
                <NavLink className='nav-link' to='/'>
                  ГЛАВНАЯ
                </NavLink>
              </li>
              <li className={splitLocation[1] === 'pricing' ? 'active' : ''}>
                <NavLink className='nav-link' to='/pricing'>
                  ЦЕНЫ
                </NavLink>
              </li>
              <li className={splitLocation[1] === 'gallery' ? 'active' : ''}>
                <NavLink className='nav-link' to='/gallery'>
                  ГАЛЕРЕЯ
                </NavLink>
              </li>
              <li className={splitLocation[1] === 'contacts' ? 'active' : ''}>
                <NavLink className='nav-link' to='/contacts'>
                  КОНТАКТЫ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='header__photo'>
          <img className='img-fluid' src={headerPhoto} width='100%' />
        </div>
      </header>
    </>
  );
};

export default Header;
