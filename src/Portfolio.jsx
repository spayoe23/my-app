import React, { useState, useRef } from 'react';
import './Portfolio.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function Portfolio() {
const [previousWorks, setPreviousWorks] = useState([]);
const fileInputRef = useRef(null);

const handleUpload = (e) => {
const files = Array.from(e.target.files);
const newImages = files.map(file => ({
url: URL.createObjectURL(file),
file,
description: '',
editing: false,
}));
setPreviousWorks(prev => [...prev, ...newImages]);
};

const handleDescChange = (index, value) => {
const updated = [...previousWorks];
updated[index].description = value;
setPreviousWorks(updated);
};

const toggleEditing = (index) => {
const updated = [...previousWorks];
updated[index].editing = !updated[index].editing;
setPreviousWorks(updated);
};

const deleteImage = (index) => {
const updated = previousWorks.filter((_, i) => i !== index);
setPreviousWorks(updated);
};

const triggerUpload = () => {
fileInputRef.current.click();
};

return (
    <>
    <Header/>
<div className="portfolio-container">
<h2>Previous Works</h2>

  {/* Hidden file input */}
  <input
    type="file"
    multiple
    accept="image/*"
    ref={fileInputRef}
    style={{ display: 'none' }}
    onChange={handleUpload}
  />

  {/* Image Grid */}
  <div className="image-grid">
    {previousWorks.map((img, index) => (
      <div key={index} className="image-box">
        <button className="delete-btn" onClick={() => deleteImage(index)}>🗑️</button>
        <img src={img.url} alt={`Previous ${index}`} />
        <div className="description-section">
          {img.editing ? (
            <>
              <textarea
                value={img.description}
                onChange={(e) => handleDescChange(index, e.target.value)}
                placeholder="Add description..."
              />
              <button onClick={() => toggleEditing(index)}>💾 Save</button>
            </>
          ) : (
            <>
              <p>{img.description || <span className="placeholder">No description</span>}</p>
              <button onClick={() => toggleEditing(index)}>✏️ Edit</button>
            </>
          )}
        </div>
      </div>
    ))}
  </div>

  {/* Floating Add Button */}
  <button className="add-work-btn" onClick={triggerUpload}>
    ➕ Add More Work
  </button>
</div>
<Footer/>
</>
);
}

export default Portfolio;