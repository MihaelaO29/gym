import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Trainers from './components/trainers/trainers';
import Classes from './components/classes/classes';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Schedules from './components/schedules/schedules';
import workout1 from './images/workout1.jpg';



function App() {
  return (

<Router>
<div className='App'
  style={{
    backgroundImage: `url(${workout1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/trainers" element={<Trainers/>} />
    <Route path="/classes" element={<Classes/>} />
    <Route path="/schedules" element={<Schedules/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
</div>

</Router>
  );
}

export default App;
