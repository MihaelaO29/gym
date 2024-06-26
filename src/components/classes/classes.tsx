import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';
import './classes.css';
import classes1 from '../../images/classes-1.jpg';
import classes2 from '../../images/classes-2.jpg';
import classes3 from '../../images/classes-3.jpg';
import classes4 from '../../images/classes-4.jpg';
import classes5 from '../../images/classes-5.jpg';
import classes6 from '../../images/classes-6.jpg';


function Classes() {
  return (
    <div className='classes_section'>
      <Navigation />
      <div className='classes'>
        <div className='classes_title'>OUR FITNESS CLASSES</div>
      </div>

      <div className='classes_content'>
        <div className='classes_images'>
          <div
            className='class_img1'
            style={{
              backgroundImage: `url(${classes1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className='img_hover'>
              <div className='class_img_text'>BODY BUILDING</div>
            </div>
            <div className='class_img_price'>$100</div>
          </div>
          <div
            className='class_img2'
            style={{
              backgroundImage: `url(${classes2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className='img_hover'>
              <div className='class_img_text'>WEIGHT LIFTING</div>
            </div>
            <div className='class_img_price'>$100</div>
          </div>
          <div
            className='class_img3'
            style={{
              backgroundImage: `url(${classes3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className='img_hover'>
              <div className='class_img_text'>CARDIO</div>
            </div>
            <div className='class_img_price'>$100</div>
          </div>
          <div
            className='class_img4'
            style={{
              backgroundImage: `url(${classes4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className='img_hover'>
              <div className='class_img_text'>MARTIAL ARTS</div>
            </div>
            <div className='class_img_price'>$200</div>
          </div>
          <div
            className='class_img5'
            style={{
              backgroundImage: `url(${classes5})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className='img_hover'>
              <div className='class_img_text'>YOGA</div>
            </div>
            <div className='class_img_price'>$200</div>
          </div>
          <div
            className='class_img6'
            style={{
              backgroundImage: `url(${classes6})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className='img_hover'>
              <div className='class_img_text'>CYCLING</div>
            </div>
            <div className='class_img_price'>$200</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Classes;