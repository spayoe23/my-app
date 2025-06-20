// src/VendorDescription.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function VendorDescription() {
  const { vendorId } = useParams();

  return (
    <>
      <Header />
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Vendor Profile: {vendorId}</h1>
        <p>This is the detailed page for vendor #{vendorId}</p>
      </div>
      <Footer />
    </>
  );
}

export default VendorDescription;
