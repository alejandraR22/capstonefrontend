import React, { useState } from 'react';
import './Register.css';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');  // Add 'email' state
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!username || !email || !password) {
      console.error('Username, email, and password are required.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email, 
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful', data);
      } else {
        const errorData = await response.json();
        console.error('Registration failed', errorData);
      }
    } catch (error) {
      console.error('Error during registration', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="register-container"> 
        <h2>Register</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleRegister} disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </div>
    </div>
  );
};

export default Register;