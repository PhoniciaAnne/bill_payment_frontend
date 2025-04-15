import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '90vh',
      background: 'var(--primary-color)'
    }}>
      <h1 style={{ color: 'var(--light-text)', marginBottom: '2rem' }}>
        Welcome to Bill Payment App
      </h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/auth/login">
          <Button>Login</Button>
        </Link>
        <Link to="/auth/signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
