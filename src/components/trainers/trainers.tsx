import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';
import './trainers.css';
import trainer1 from '../../images/trainer1.png';
import trainer2 from '../../images/trainer2.png';
import trainer3 from '../../images/trainer3.png';
import trainer4 from '../../images/trainer4.png';
import equipments from '../../images/equipments.png';
import gym from '../../images/gym.png';
import suppliments from '../../images/suppliments.png';


function Trainers() {
  return (
    <div className='trainers_section'>
      <Navigation />

      <div className='trainers'>
        <div className='trainers_title'>OUR COACH</div>
      </div>
      <div className='trainers_content'>
        <div className='trainers_content_heading'>FITNESS TRAINER</div>
        <div className='all_trainers'>
          <div className='trainer_wrapper'>
            <img className='trainer' src={trainer1} alt='trainer1' />
            <div className='trainer_name'>ARON MIGHTY</div>
          </div>
          <div className='trainer_wrapper'>
            <img className='trainer' src={trainer2} alt='trainer2' />
            <div className='trainer_name'>ALICIA BROWN</div>
          </div>
          <div className='trainer_wrapper'>
            <img className='trainer' src={trainer3} alt='trainer3' />
            <div className='trainer_name'>ANNE HENDERSON</div>
          </div>
          <div className='trainer_wrapper'>
            <img className='trainer' src={trainer4} alt='trainer4' />
            <div className='trainer_name'>BRUCE GRAPLER</div>
          </div>
        </div>
      </div>

      <div className='gym_details'>
        <div className='details_wrapper'>
          <img src={equipments} alt='equipments' />
          <div className='gym_details_benefits'>
            <div className='gym_details_heading'>THOUSANDS OF EQUIPMENTS</div>
            <div className='gym_details_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
          </div>
        </div>

        <div className='details_wrapper'>
          <img src={gym} alt='gym' />
          <div className='gym_details_benefits'>
            <div className='gym_details_heading'>OPEN 24/7 GYM FITNESS</div>
            <div className='gym_details_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
          </div>
        </div>


        <div className='details_wrapper'>
          <img src={suppliments} alt='suppliments' />
          <div className='gym_details_benefits'>
            <div className='gym_details_heading'>FOOD SUPPLEMENTS</div>
            <div className='gym_details_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Trainers;


