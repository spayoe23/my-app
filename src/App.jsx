import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import Register from './Register';
import Cdash from './Cdash'; 
import Todo from './Todo';
import FeedbackWrite from './FeedbackWrite';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import StartPlanning from './StartPlaning';
import VendorDescription from './VendorDescription';
import Vdash from './Vdash';
import Pricing from './Pricing';
import Portfolio from './Portfolio';
import ViewProfile from './ViewVprofi;e';
import CustomerViewProfile from './CustomerViewProfile';
import Agreement from './Agreement'
import MyEvent from './MyEvent';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cdash" element={<Cdash />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/feedbackwrite" element={<FeedbackWrite />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/start-planning" element={<StartPlanning />} />
        <Route path="/vendor/:vendorId" element={<VendorDescription />} />
        <Route path="/vdash" element={<Vdash />} />
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path="/vdash/view-profile" element={<ViewProfile />} />
        <Route path='/cdash/customer-view-profile' element={<CustomerViewProfile/>}/>
        <Route path='/agreement' element={<Agreement/>}/>
        <Route path='/myevent' element={<MyEvent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
