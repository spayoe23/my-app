import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUserCircle,
  FaClipboardList,
  FaCalendarAlt,
  FaComments,
  FaSignOutAlt,
  FaBars,
} from 'react-icons/fa';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './Cdash.css';

function Cdash() {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();
  const username = 'Shehani'; // Replace with dynamic value if needed

  const handleLogout = () => {
    navigate('/');
  };

  const handleStartPlanning = () => {
    navigate('/start-planning');
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <>
      <Header />
      <div className="cdash-container animate-sidebar">
        <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          {/* Hamburger icon */}
          <div className="toggle-btn" onClick={toggleSidebar}>
            <FaBars className="hamburger-icon" />
          </div>

          {/* Profile section */}
          <div className="profile-section">
            {!sidebarCollapsed && <div className="greeting">Hi, {username}! 👋</div>}
            <div className="profile-photo">
              <img src="https://via.placeholder.com/80" alt="Profile" />
            </div>
            <button onClick={() => navigate('/cdash/customer-view-profile')}>
              <FaUserCircle className="icon" />
              {!sidebarCollapsed && 'View Profile'}
            </button>
          </div>

          {/* Menu buttons */}
          <div className="menu-section">
            <button onClick={() => navigate('/myEvent')}>
              <FaCalendarAlt className="icon" />
              {!sidebarCollapsed && 'My Events'}
            </button>
            <button>
              <FaClipboardList className="icon" />
              {!sidebarCollapsed && 'To Do List'}
            </button>
            <button onClick={() => navigate('/feedback')}>
              <FaComments className="icon" />
              {!sidebarCollapsed && 'Feedback'}
            </button>
            <button onClick={() => setShowLogoutPopup(true)}>
              <FaSignOutAlt className="icon" />
              {!sidebarCollapsed && 'Logout'}
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="main-content">
          <button className="chat-button">💬</button>
          <div className="center-box">
            <h2>Hey, Let's Plan Your Dream Day Together!</h2>
            <button className="start-btn" onClick={handleStartPlanning}>Start</button>
          </div>
        </div>
      </div>

      <Footer />

      {/* Logout popup */}
      {showLogoutPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img src="/logo.png" alt="Plannex Logo" className="popup-logo" />
            <h2>Log Out</h2>
            <p>Are you sure?</p>
            <div className="popup-buttons">
              <button onClick={() => setShowLogoutPopup(false)}>Cancel</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cdash;
