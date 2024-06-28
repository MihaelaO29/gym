import './home.css';
import { useEffect, useState } from 'react';
import workout1 from '../../images/workout1.jpg';
import workout2 from '../../images/workout2.jpg';
import workout3 from '../../images/workout3.jpg';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';


function Home() {
  const images = [workout1, workout2, workout3];
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
       <Navigation/>
       
        <div className='home_content'>
          <div className='home_content_details'>
            <div className='home_title'>SHAPE YOUR <br /> PERFECT BODY</div>
            <div className='home_btn'>
              <button className='home_btn_content'>TAKE A TOUR NOW</button>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Home;
