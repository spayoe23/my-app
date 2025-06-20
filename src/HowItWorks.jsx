import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <>
      <Header />
      <div className="how-wrapper">
        <section className="how-section">
          <h2 className="section-title">Customers</h2>
          <div className="how-list">
            <div className="how-item">
              <img src="/icons/signup.png" alt="Sign Up" />
              <div>
                <h4>Sign Up & Explore</h4>
                <p>Register for free and browse a wide range of professional vendors...</p>
              </div>
            </div>
            <div className="how-item">
              <img src="/icons/compare.png" alt="Compare" />
              <div>
                <h4>Find & Compare</h4>
                <p>View vendor profiles, compare packages, and read reviews...</p>
              </div>
            </div>
            <div className="how-item">
              <img src="/icons/book.png" alt="Book" />
              <div>
                <h4>Book With Ease</h4>
                <p>Select your preferred vendors and book their services securely...</p>
              </div>
            </div>
            <div className="how-item">
              <img src="/icons/manage.png" alt="Manage" />
              <div>
                <h4>Plan & Manage</h4>
                <p>Keep track of bookings and manage events with your dashboard...</p>
              </div>
            </div>
            <div className="how-item">
              <img src="/icons/enjoy.png" alt="Enjoy" />
              <div>
                <h4>Enjoy Your Event</h4>
                <p>Relax and enjoy while trusted professionals bring your vision to life...</p>
              </div>
            </div>
          </div>
        </section>

        <section className="how-section">
          <h2 className="section-title">Vendors</h2>
          <div className="how-list">
            <div className="how-item">
              <img src="/icons/profile.png" alt="Profile" />
              <div>
                <h4>Register & Create a Profile</h4>
                <p>Sign up, set up your profile, and showcase your services...</p>
              </div>
            </div>
            <div className="how-item">
              <img src="/icons/bookings.png" alt="Bookings" />
              <div>
                <h4>Receive Bookings</h4>
                <p>Get discovered and manage availability easily...</p>
              </div>
            </div>
            <div className="how-item">
              <img src="/icons/services.png" alt="Services" />
              <div>
                <h4>Offer Seamless Services</h4>
                <p>Communicate with clients and deliver quality services...</p>
              </div>
            </div>
            <div className="how-item">
              <img src="/icons/grow.png" alt="Grow" />
              <div>
                <h4>Earn & Grow</h4>
                <p>Expand your business while building a reputation...</p>
              </div>
            </div>
            <div className="how-item">
              <img src="/icons/insights.png" alt="Insights" />
              <div>
                <h4>Support & Insights</h4>
                <p>Gain access to analytics and feedback for improvement...</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default HowItWorks;
