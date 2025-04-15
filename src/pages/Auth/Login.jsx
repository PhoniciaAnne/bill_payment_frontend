import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { loginCustomer, loginBiller } from '../../services/authService';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('customer');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (role === 'customer') {
        res = await loginCustomer({ username, password });
        // On success, redirect to /customer
        navigate('/customer');
      } else {
        res = await loginBiller({ username, password });
        // On success, redirect to /biller
        navigate('/biller');
      }
      setMessage(res.data.message || 'Login success!');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', background: 'var(--secondary-color)', padding: '1rem', borderRadius: '8px' }}>
      <h2 style={{ color: 'var(--dark-text)', marginBottom: '1rem' }}>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ color: 'var(--light-text)' }}>
            <span style={{ color: 'var(--dark-text)' }}>Role: </span>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="customer">Customer</option>
              <option value="biller">Biller</option>
            </select>
          </label>
        </div>

        <Input
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />

        <Button type="submit">Login</Button>
      </form>
      {message && <p style={{ marginTop: '1rem', color: 'var(--dark-text)' }}>{message}</p>}
    </div>
  );
};

export default Login;
