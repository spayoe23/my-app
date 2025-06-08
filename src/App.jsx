import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import Register from './Register';
import Cdash from './Cdash'; 
import MyEvent from './MyEvent';
import Todo from './Todo';
import FeedbackWrite from './FeedbackWrite';
import AboutUs from './AboutUs';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cdash" element={<Cdash />} />
        <Route path="/myevent" element={<MyEvent />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/feedbackwrite" element={<FeedbackWrite />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
