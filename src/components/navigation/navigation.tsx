import './navigation.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';

function Navigation() {
  const location = useLocation();

  return (
    <div>
      <div className='home_social_media'>
        <div>Free Call +1 234 456 78910</div>
        <div className='social_media_icon'>
          <div className='media_icon'> <img className='icon' src={twitter} alt='twitter' /></div>
          <div className='media_icon'> <img className='icon' src={facebook} alt='facebook' /></div>
          <div className='media_icon'><img className='icon' src={instagram} alt='instagram' /></div>
        </div>
      </div>
      <div className='nav'>
        <img className='logo' src={logo} alt='logo' />
        <div className='menu'>
          <Link
            className={`menu_link ${location?.pathname === '/' ? 'clicked' : ''}`}
            to='/'
          >
            HOME
          </Link>
          <Link
            className={`menu_link ${location?.pathname === '/about' ? 'clicked' : ''}`}
            to='/about'
          >
            ABOUT
          </Link>
          <Link
            className={`menu_link ${location?.pathname === '/trainers' ? 'clicked' : ''}`}
            to='/trainers'
          >
            TRAINERS
          </Link>
          <Link
            className={`menu_link ${location?.pathname === '/classes' ? 'clicked' : ''}`}
            to='/classes'
          >
            CLASSES
          </Link>
          <Link
            className={`menu_link ${location?.pathname === '/schedules' ? 'clicked' : ''}`}
            to='/schedules'
          >
            SCHEDULES
          </Link>
          <Link
            className={`menu_link ${location?.pathname === '/contact' ? 'clicked' : ''}`}
            to='/contact'
          >
            CONTACT
          </Link>
          <div className='menu_link_btn'>BECOME A MEMBER</div>
        </div>
      </div>
    </div>
  );
}


export default Navigation;
