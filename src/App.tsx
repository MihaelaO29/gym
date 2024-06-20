import './App.css';
import About from './components/about/about';
import Benefits from './components/benefits/benefits';
import Bmi from './components/bmi/bmi';
import Classes from './components/classes/classes';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Pricing from './components/pricing/pricing';
import Schedules from './components/schedules/schedules';


function App() {
  return (
    <div className='App'>
      <Home/>
      <About/>
      <Benefits/>
      <Bmi/>
      <Classes/>
      <Pricing/>
      <Schedules/>
      <Pricing/>
      <Footer/> 
    </div>
  );
}

export default App;
