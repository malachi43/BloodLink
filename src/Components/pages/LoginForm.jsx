import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="login-container" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', borderRadius: '10px', border: '1px solid #ddd', backgroundColor: '#fff' }}>
      <h2>Welcome Back!</h2>
      <p>To get started log into your account.</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group" style={{ marginBottom: '15px' }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
        </div>
        <div className="input-group" style={{ marginBottom: '15px' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          />
          <span onClick={handlePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', cursor: 'pointer', transform: 'translateY(-50%)' }}>
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        <p>
          <a href="/forgot-password" style={{ color: '#32CD32', textDecoration: 'none' }}>Forgot Password?</a>
        </p>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '5px',
            backgroundColor: '#32CD32',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Log In
        </button>
      </form>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <p>Or log in with</p>
        <button
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            marginBottom: '10px',
            cursor: 'pointer',
            backgroundColor: '#fff',
            color: '#333',
          }}
        >
          <img src="google-logo.png" alt="Google" style={{ marginRight: '10px' }} />
          Log in with Google
        </button>
        <button
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            cursor: 'pointer',
            backgroundColor: '#fff',
            color: '#333',
          }}
        >
          <img src="facebook-logo.png" alt="Facebook" style={{ marginRight: '10px' }} />
          Log in with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
