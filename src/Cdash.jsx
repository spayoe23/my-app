import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './Cdash.css';

function Cdash() {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleStartPlanning = () => {
    navigate('/start-planning');
  };

  return (
    <>
      <Header />
      <div className="cdash-container">
        <div className="sidebar">
          <div className="profile-section">
            <button onClick={() => navigate('/cdash/customer-view-profile')}>View Profile</button>
            <div className="profile-photo">
              <img src="https://via.placeholder.com/80" alt="Profile" />
            </div>
          </div>
          <div className="menu-section">
            <button onClick={() => navigate('/myEvent')}>My Events</button>
            <button>To Do List</button>
            <button onClick={() => navigate('/feedback')}>Feedback</button>
            <button onClick={() => setShowLogoutPopup(true)}>Logout</button>
          </div>
        </div>

        <div className="main-content">
          {/* Chat Button */}
          <button className="chat-button">💬</button>

          {/* Center Content */}
          <div className="center-box">
            <h2>Lets Plan Your Dream Day Together!</h2>
            <button className="start-btn" onClick={handleStartPlanning}>Start</button>
          </div>
        </div>
      </div>
      <Footer />

      {/* Logout Popup */}
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