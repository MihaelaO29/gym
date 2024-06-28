import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';
import './schedules.css';

function Schedules() {
  const hourCellStyle = { backgroundColor: '#dc3545', color: 'white', fontWeight: 600 };
  const classesCellStyle = { backgroundColor: '#eceffa' };


  return (
    <div className='schedules_section'>
      <Navigation />
      <div className='schedules'>
        <div className='schedules_title'>SCHEDULES</div>
      </div>
      <div className='schedules_content'>
        <div className='schedules_table'>
          <div className="table_component">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={hourCellStyle}>8am-9am</td>
                  <td>Body Building</td>
                  <td style={classesCellStyle}>Weight Lifting</td>
                  <td></td>
                  <td style={classesCellStyle}>Yoga</td>
                  <td>Aerobics</td>
                  <td style={classesCellStyle}>Cycling</td>
                  <td>Stretching</td>
                </tr>
                <tr>
                  <td style={hourCellStyle}>10am-11am</td>
                  <td>Weight Lifting</td>
                  <td style={classesCellStyle}>Body Building</td>
                  <td>Cardio</td>
                  <td style={classesCellStyle}>Yoga</td>
                  <td>Aerobics</td>
                  <td style={classesCellStyle}>Cycling</td>
                  <td>Stretching</td>
                </tr>
                <tr>
                  <td style={hourCellStyle}>1pm-2am</td>
                  <td></td>
                  <td style={classesCellStyle}>Weight Lifting</td>
                  <td>Cardio</td>
                  <td style={classesCellStyle}>Yoga</td>
                  <td>Aerobics</td>
                  <td style={classesCellStyle}>Cycling</td>
                  <td>Stretching</td>
                </tr>
                <tr>
                  <td style={hourCellStyle}>3pm-5pm</td>
                  <td>Aerobics</td>
                  <td style={classesCellStyle}>Weight Lifting</td>
                  <td>Cardio</td>
                  <td style={classesCellStyle}>Yoga</td>
                  <td>Body Building</td>
                  <td style={classesCellStyle}></td>
                  <td>Stretching</td>
                </tr>
                <tr>
                  <td style={hourCellStyle}>7pm-9pm</td>
                  <td>Body Building</td>
                  <td style={classesCellStyle}>Weight Lifting</td>
                  <td>Cardio</td>
                  <td style={classesCellStyle}></td>
                  <td>Aerobics</td>
                  <td style={classesCellStyle}>Cycling</td>
                  <td>Stretching</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div className='pricing_plan_details'>
          <div className='pricing_heading'>
            <div className='pricing_heading_text'>OUR PRICING</div>
            <div className='pricing_subheading'>PRICING & PACKAGES</div>
          </div>
          <div className='pricing_plan_list'>
            <div className='pricing_plan'>
              <div className='plan_type'>BASIC PLAN</div>
              <div className='plan_price'>$ 49</div>
              <div className='plan_benefit'>Personal Trainer</div>
              <div className='plan_benefit'>Convienient Time</div>
              <div className='plan_benefit'>Special Class</div>
              <div className='plan_benefit'>Group Traning</div>
              <div className='plan_benefit'>Fitness Traning</div>
              <button className='plan_button'>GET STARTED</button>
            </div>

            <div className='pricing_plan'>
              <div className='plan_type'>BEGINNER PLAN</div>
              <div className='plan_price'>$ 60</div>
              <div className='plan_benefit'>Personal Trainer</div>
              <div className='plan_benefit'>Convienient Time</div>
              <div className='plan_benefit'>Special Class</div>
              <div className='plan_benefit'>Group Traning</div>
              <div className='plan_benefit'>Fitness Traning</div>
              <button className='plan_button'>GET STARTED</button>
            </div>

            <div className='pricing_plan'>
              <div className='plan_type'>PREMIUM PLAN</div>
              <div className='plan_price'>$ 70</div>
              <div className='plan_benefit'>Personal Trainer</div>
              <div className='plan_benefit'>Convienient Time</div>
              <div className='plan_benefit'>Special Class</div>
              <div className='plan_benefit'>Group Traning</div>
              <div className='plan_benefit'>Fitness Traning</div>
              <button className='plan_button'>GET STARTED</button>
            </div>

            <div className='pricing_plan'>
              <div className='plan_type'>ULTIMATE PLAN</div>
              <div className='plan_price'>$ 99</div>
              <div className='plan_benefit'>Personal Trainer</div>
              <div className='plan_benefit'>Convienient Time</div>
              <div className='plan_benefit'>Special Class</div>
              <div className='plan_benefit'>Group Traning</div>
              <div className='plan_benefit'>Fitness Traning</div>
              <button className='plan_button'>GET STARTED</button>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </div>
  );
}

export default Schedules;





