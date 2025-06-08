import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="logo">PLANNEX</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <NavLink to="/about">About Us</NavLink>
        <a href="#">How it works</a>
        <a href="#">Services</a>
        <a href="#">Languages</a>
      </div>
    </div>
  );
}

export default Header;