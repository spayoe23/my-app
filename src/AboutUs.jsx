import React from 'react';
import './AboutUs.css'; 
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function AboutUs() {
  return (
    <>
    <Header/>
    <div className="about-container">
      <div className="about-content">
        <h1>About us</h1>
        <p>
          At Plannex, we redefine the way events come to life by connecting dreamers with doers.
          Our platform is more than just software—it’s a movement that empowers individuals to seamlessly plan unforgettable moments while giving talented vendors the opportunity to showcase their expertise.
          <br /><br />
          We believe in the power of seamless collaboration. That’s why Plannex is designed to bring together event organizers and top-tier professionals—photographers, makeup artists, decorators, and more—making event planning effortless and enjoyable.
          Whether you're celebrating a milestone, launching a brand, or curating a magical wedding, Plannex ensures every detail is handled with excellence.
          <br /><br />
          Our vibrant community is at the heart of everything we do. Every user, from clients crafting their dream events to vendors providing exceptional services, is a vital part of our ecosystem.
          Your trust and enthusiasm inspire us to keep innovating, simplifying, and elevating the event planning experience.
          <br /><br />
          To our dedicated team, thank you for fueling this vision with passion, creativity, and relentless commitment.
          Together, we are revolutionizing the industry—one seamless event at a time.
          <br /><br />
          Join us on this journey to make every occasion extraordinary. With Plannex, your perfect event is just a few clicks away.
          <br /><br />
          Stay inspired,<br />
          <strong>The Plannex Team</strong>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AboutUs;
