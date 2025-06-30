import './Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine first and last name
    const fullName = `${formData.fname} ${formData.lname}`;

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();
      setMessage(data.message || 'Registered!');
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Registration failed');
    }
  };

  return (
    <div className="register-container">
      <div className="logo">PLANNEX</div>

      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <div className="input-box">
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              required
            />
          </div>

          <label>Last Name</label>
          <div className="input-box">
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              required
            />
          </div>

          <label>Email</label>
          <div className="input-box">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <label>Password</label>
          <div className="input-box">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="register-btn" type="submit">Create an Account</button>
        </form>

        {message && <p style={{ marginTop: '10px', color: 'green' }}>{message}</p>}

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
