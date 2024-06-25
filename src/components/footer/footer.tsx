import './footer.css';
import logo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import map from '../../images/map.png';
import phone from '../../images/phone.png';
import mail from '../../images/email.png';


function Footer() {
  return (
    <div className='footer_section'>
      <div className='footer_section_details'>
        <div className='footer_section1'>
          <img className='footer_logo' src={logo} alt='logo' />
          <div className='section1_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </div>
          <div className='footer_social_media'>
            <div className='background-footer_img'>
              <img className='footer_media' src={twitter} alt='twitter' />
            </div>
            <div className='background-footer_img'>
              <img className='footer_media' src={facebook} alt='facebook' />
            </div>
            <div className='background-footer_img'>
              <img className='footer_media' src={instagram} alt='instagram' />
            </div>
          </div>
        </div>

        <div className='footer_section2'>
          <div className='footer_heading'>Explore</div>
          <div className='footer_subheading'>About Us</div>
          <div className='footer_subheading'>Trainers Team</div>
          <div className='footer_subheading'>Awesome Classes</div>
          <div className='footer_subheading'>Pricing Packages</div>
          <div className='footer_subheading'>Latest News</div>
        </div>
        <div className='footer_section3'>
          <div className='footer_heading'>Our contact</div>
          <div className='contact_details'>
            <img src={map} alt='map' />
            <div className='contact'>203 Fake St. Mountain View, San Francisco, California, USA</div>
          </div>
          <div className='contact_details'>
            <img src={phone} alt='phone' />
            <div className='contact'>+2 392 3929 210</div>
          </div>
          <div className='contact_details'>
            <img src={mail} alt='mail' />
            <div className='contact'>info@yourdomain.com</div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Footer;