import './home.css';
import { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import home1 from '../../images/home1.jpg';
import home2 from '../../images/home2.jpg';
import home3 from '../../images/home3.jpg';


function Home() {
  const images = [home1, home2, home3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className='home'
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#0000004d'
      }}
    >
      <div className='home_section'>
        <div className='home_social_media'>
          <div>Free Call +1 234 456 78910</div>
          <div className='social_media_icon'>
            <div className='media_icon'> <img className='icon' src={twitter} alt='twitter' /></div>
            <div className='media_icon'> <img className='icon' src={facebook} alt='facebook' /></div>
            <div className='media_icon'><img className='icon' src={instagram} alt='instagram' /></div>
          </div>
        </div>
        <div className='navigation'>
          <img className='logo' src={logo} alt='logo' />
          <div className='menu'>
            <div className='menu_link'>HOME</div>
            <div className='menu_link'>ABOUT</div>
            <div className='menu_link'>CLASSES</div>
            <div className='menu_link'>SCHEDULES</div>
            <div className='menu_link'>NEWS</div>
            <div className='menu_link'>CONTACT</div>
            <div className='menu_link'>HOME</div>
            <div className='member_link'>
              <div className='menu_link_btn'>BECOME A MEMBER</div>
            </div>
          </div>
        </div>
        <div className='home_content'>
          <div className='home_content_details'>
            <div className='home_title'>SHAPE YOUR <br /> PERFECT BODY</div>
            <div className='home_btn'>
              <button className='home_btn_content'>TAKE A TOUR NOW</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
