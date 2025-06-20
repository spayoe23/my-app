import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './StartPlanning.css';

function StartPlanning() {
  const navigate = useNavigate();

  const handleServiceClick = (id) => {
    navigate(`/vendor/${id}`);
  };

  return (
    <>
      <Header />
      <div className="start-container">
        <div className="filters">
          <select className="dropdown"><option>Service Options</option></select>
          <select className="dropdown"><option>Budget</option></select>
          <select className="dropdown"><option>Seller Details</option></select>
          <select className="dropdown"><option>Date & Time</option></select>

          <div className="sort-section">
            <label>Sort by:</label>
            <select className="sort-dropdown">
              <option>Top Rated</option>
              <option>Budget</option>
            </select>
          </div>
        </div>

        <div className="services-grid">
          {[...Array(20)].map((_, index) => (
            <div className="service-card" key={index}>
              {/* Make image clickable */}
              <img
                src="/assets/hero.jpg"
                alt="Service"
                className="service-img"
                onClick={() => handleServiceClick(index + 1)}
                style={{ cursor: 'pointer' }}
              />
              <div className="vendor-info">
                <img src="https://via.placeholder.com/40" alt="Vendor" className="vendor-pic" />
                <div>
                  <h4 className="vendor-name">Vendor {index + 1}</h4>
                  <p className="vendor-rating">⭐ 4.{index % 5} / 5</p>
                  <p className="vendor-slang">"Making magic happen"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StartPlanning;
