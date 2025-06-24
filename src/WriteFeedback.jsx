import React, { useState } from 'react';
import './WriteFeedback.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function WriteFeedback() {
const questions = [
'How satisfied are you with the overall event planning experience?',
'Was the event planning process smooth and intuitive?',
'Did the system meet your expectations?',
'How easy was it to navigate the platform?',
'Were the instructions and labels clear and helpful?',
'Was communication with vendors or organizers smooth through the system?',
];

const [ratings, setRatings] = useState(Array(questions.length).fill(0));
const [textFeedback, setTextFeedback] = useState('');

const handleStarClick = (questionIndex, rating) => {
const newRatings = [...ratings];
newRatings[questionIndex] = rating;
setRatings(newRatings);
};

const handleSubmit = () => {
console.log('Ratings:', ratings);
console.log('Final comment:', textFeedback);
alert('Thank you for your feedback!');
};

return (
    <>
    <Header/>
<div className="feedback-container">
<h2>Leave a Feedback</h2>

  {questions.map((question, index) => (
    <div key={index} className="question-block">
      <p>{question}</p>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={ratings[index] >= star ? 'filled' : ''}
            onClick={() => handleStarClick(index, star)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  ))}

  <div className="question-block">
    
    <p>
      How was your overall experience? What’s that one thing that you won’t forget about Plannex?
    </p>
    <textarea
      rows="4"
      value={textFeedback}
      onChange={(e) => setTextFeedback(e.target.value)}
      placeholder="Share your thoughts here..."
    />
  </div>

  <div className="button-container">
    <button onClick={handleSubmit}>Publish Feedback</button>
  </div>
</div>
<Footer/>
</>
);
}

export default WriteFeedback;