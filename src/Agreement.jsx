import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Agreement.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function Agreement() {
const navigate = useNavigate();


const handleAgree = () => {
navigate('/vdash'); 
};

return (
    <>
    <Header/>
<div className="agreement-container">
<h2>Vendor Agreement</h2>

  <div className="agreement-box">
    <p>Welcome to <strong>Plannex Event Management</strong>!!!</p>
    <p>Before continuing, please review and accept our Vendor Terms & Conditions:</p>
    <ul>
      <li>You agree to provide accurate and high-quality products/services.</li>
      <li>You will fulfill all orders promptly and professionally.</li>
      <li>You accept any applicable listing or commission fees.</li>
      <li>You allow Plannex to use your brand assets (logo, images, descriptions) for marketing.</li>
      <li>You understand that your account may be suspended or removed for policy violations, fraud, or poor customer feedback.</li>
      <li>You take full responsibility for your products/services and any related claims or issues.</li>
      <li>You accept that legal action may be taken in cases of breach or misconduct.</li>
      <li>This agreement is governed by the laws of our operating jurisdiction.</li>
    </ul>
    <p><strong>By clicking “Agree and Continue”, you confirm that you have read and accepted the terms of the Vendor Agreement.</strong></p>
  </div>

  <button className="agree-btn" onClick={handleAgree}> Agree and Continue </button>
</div>
<Footer/>
</>
);
}

export default Agreement;