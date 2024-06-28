import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';
import './contact.css';

function Contact() {
const handleClick=(e:any) => {
  e?.preventDefault();
};

  return (

  
    <div className='contact_section'>
      <Navigation />

      <div className='contact'>
        <div className='contact_title'>CONTACT US</div>

      </div>
      <div className='contact_content'>

        <div className='contact_heading_section'>
          <div className='contact_heading'>Contact us</div>
          <div className='contact_subheading'>We're open for any suggestion or just to have a chat</div>
        </div>
        <div className='contact_details_options'>
          <div className='contact_option'>
            <div className='contact_option_heading'>ADDRESS:</div>
            <div className='contact_option_subheading'>198 West 21th Street, Suite 721 New York NY 10016</div>
          </div>

          <div className='contact_option'>
            <div className='contact_option_heading'>EMAIL:</div>
            <div className='contact_option_subheading'>info@yoursite.com</div>
          </div>

          <div className='contact_option'>
            <div className='contact_option_heading'>PHONE:</div>
            <div className='contact_option_subheading'>+ 1235 2355 98</div>
          </div>
        </div>


        <div className='form_contact_details'>
          <form>
            <div >
              <input className='form_contact' type='text' placeholder='Name' name='name' required />
            </div>
            <div>
              <input className='form_contact' type='email' placeholder='Email' name='email' required />
            </div>

            <div>
              <input className='form_contact' type='text' placeholder='Subject' name='text' required />
            </div>

            <div>
              <textarea className='form_contact_text' placeholder='Create a message here' name='text' required></textarea>
            </div>
            <button onClick={handleClick} className='contact_btn'>SEND MESSAGE</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;