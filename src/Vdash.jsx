import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTag, FaBriefcase, FaSignOutAlt, FaUser } from 'react-icons/fa'; // icons
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './Vdash.css';

function Vdash() {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const username = "Shehani"; // Replace with dynamic username if available

  const [upcomingTasks, setUpcomingTasks] = useState([
    { id: 1, name: 'Roshan & Nilu Wedding', time: 'Saturday 4:00 PM', done: false },
    { id: 2, name: 'Birthday - Minushi', time: 'Sunday 10:30 AM', done: false },
    { id: 3, name: 'Corporate Event - JKH', time: 'Monday 2:00 PM', done: false }
  ]);

  const toggleTaskDone = (id) => {
    const updated = upcomingTasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setUpcomingTasks(updated);
  };

  return (
    <>
      <Header />
      <div className="cdash-container">

        {/* Sidebar */}
        <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="sidebar-top">
            <button
              className="hamburger-btn"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              aria-label="Toggle Sidebar"
            >
              <FaBars color="black" size={20} />
            </button>
            {!sidebarCollapsed && (
              <div className="greeting">
                Hello, <strong>{username}</strong>
              </div>
            )}
          </div>

          <div className="profile-section">
            <div className="profile-photo">
              <img src="https://via.placeholder.com/80" alt="Profile" />
            </div>
            {!sidebarCollapsed && (
              <button
                className="view-profile-btn"
                onClick={() => navigate('/vdash/view-profile')}
              >
                <FaUser style={{ marginRight: 8 }} />
                View Profile
              </button>
            )}
          </div>

          <div className="menu-section">
            <button onClick={() => navigate('/pricing')}>
              <FaTag className="menu-icon" />
              {!sidebarCollapsed && 'Pricing'}
            </button>
            <button onClick={() => navigate('/portfolio')}>
              <FaBriefcase className="menu-icon" />
              {!sidebarCollapsed && 'Portfolio'}
            </button>
            <button onClick={() => setShowLogoutPopup(true)}>
              <FaSignOutAlt className="menu-icon" />
              {!sidebarCollapsed && 'Logout'}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Chat Button */}
          <button className="chat-button">💬</button>

          {/* Center Box: To-Do / Upcoming Work */}
          <div className="center-box">
            <h2>Upcoming Works</h2>
            <div className="task-list">
              {upcomingTasks.map(task => (
                <div
                  key={task.id}
                  className={`task-item ${task.done ? 'completed' : ''}`}
                  onClick={() => toggleTaskDone(task.id)}
                >
                  <div className="avatar-circle">{task.name.charAt(0)}</div>
                  <div className="task-details">
                    <strong>{task.name}</strong>
                    <span>{task.time}</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTaskDone(task.id)}
                  />
                </div>
              ))}
            </div>
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

export default Vdash;
