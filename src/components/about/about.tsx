import './about.css';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import about_img from '../../images/about.webp';
import arrow from '../../images/arrow.png';
import fitness1 from '../../images/fitness1.png';
import fitness2 from '../../images/fitness2.png';
import fitness3 from '../../images/fitness3.png';


function About() {
  return (
    <div className='about_section'>
      <Navigation />
      <div className='about'>
        <div className='about_title'>ABOUT US</div>

      </div>
      <div className='about_content'>
        <div className='about_content_image'>
          <img className='about_img' src={about_img} alt='about_img' />
        </div>
        <div className='about_content_details'>
          <div className='about_information'>
            <div className='content_heading'>INFORMATION ABOUT US</div>
            <div className='content_subheading'>DAZKO A CROSSFIT WORKOUT TRAINING CENTER</div>
            <div className='content_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>

            <div className='arrow_img_details'>
              <div className='arrow_details'>
                <img src={arrow} alt='arrow' />
                <div className='arrow_text'>MEN FITNESS AND WORKOUT</div>
              </div>
              <div className='arrow_details'>
                <img src={arrow} alt='arrow' /> <div className='arrow_text'>WOMEN FITNESS AND WORKOUT</div>
              </div>
              <div className='arrow_details'>
                <img src={arrow} alt='arrow' /> <div className='arrow_text'>PERSONAL TRAININGS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='statistics'>
        <div className='statistics_details'>
          <div className='statistics_number'>30+</div>
          <div className='statistics_category'>YEARS OF EXPERIENCED</div>
        </div>

        <div className='statistics_details'>
          <div className='statistics_number'>100+</div>
          <div className='statistics_category'>FITNESS TRAINERS</div>
        </div>

        <div className='statistics_details'>
          <div className='statistics_number'>310+</div>
          <div className='statistics_category'>BEST EQUIPMENTS</div>
        </div>
        <div>

          <div className='statistics_details'>
            <div className='statistics_number'>10k+</div>
            <div className='statistics_category'>SATISFIED CLIENTS</div>
          </div>
        </div>
      </div>

      <div className='benefits'>

        <div className='benefits_details'>
          <div className='benefit_join'>JOIN US NOW</div>
          <div className='benefits_join_text'>JOIN US OUR FREETRAINING WITH <br />  WORK OUT</div>
        </div>

        <div className='benefits_cases'>
          <div className='case'>
            <img className='benefits_image' src={fitness1} alt='fitness1' />
            <div className='benefits_heading'>FREE FITNESS TRAINING</div>
            <div className='benefits_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>

          <div className='case'>
            <img className='benefits_image' src={fitness2} alt='fitness1' />
            <div className='benefits_heading'>TONS OF CARDIO & STRENGTH</div>
            <div className='benefits_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>

          <div className='case'>
            <img className='benefits_image' src={fitness3} alt='fitness1' />
            <div className='benefits_heading'>FREE FITNESS
              TRAINING</div>
            <div className='benefits_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;