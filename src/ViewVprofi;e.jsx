import React, { useState } from 'react';

import './ViewVProfile.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function ViewProfile() {
const [profilePic, setProfilePic] = useState('https://via.placeholder.com/120');
const [name, setName] = useState('Vendor Name');
const [slang, setSlang] = useState('Your tagline here...');
const [email, setEmail] = useState('you@example.com');
const [contact, setContact] = useState('+94 123 456 789');
const [editMode, setEditMode] = useState(false);

const fileInputRef = React.useRef(null);

const handleChangePicture = (e) => {
const file = e.target.files[0];
if (file) {
const newPic = URL.createObjectURL(file);
setProfilePic(newPic);
}
};

const handleDeletePicture = () => {
setProfilePic('');
};

const handleCancel = () => {
// Optionally reload or revert data
setEditMode(false);
};

const handleEditSave = () => {
setEditMode(!editMode);
};

return (
    <>
    <Header/>
<div className="view-profile-container">
<h2>View Profile</h2>


  <div className="profile-section">
    <img src={profilePic || 'https://via.placeholder.com/120'} alt="Profile" className="profile-img" />

    <div className="profile-buttons">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleChangePicture}
        accept="image/*"
      />
      <button onClick={() => fileInputRef.current.click()}>Change Picture</button>
      <button onClick={handleDeletePicture}>Delete Picture</button>
    </div>
  </div>

  <div className="info-section">
    <label>Name:</label>
    {editMode ? <input value={name} onChange={(e) => setName(e.target.value)} /> : <p>{name}</p>}

    <label>Slang:</label>
    {editMode ? <input value={slang} onChange={(e) => setSlang(e.target.value)} /> : <p>{slang}</p>}

    <label>Email:</label>
    {editMode ? <input value={email} onChange={(e) => setEmail(e.target.value)} /> : <p>{email}</p>}

    <label>Contact:</label>
    {editMode ? <input value={contact} onChange={(e) => setContact(e.target.value)} /> : <p>{contact}</p>}
  </div>

  <div className="button-group">
    {editMode && <button onClick={handleCancel} className="cancel">Cancel</button>}
    <button onClick={handleEditSave} className="edit-save">{editMode ? 'Save' : 'Edit Profile'}</button>
  </div>
</div>
<Footer/>
</>
);
}

export default ViewProfile;