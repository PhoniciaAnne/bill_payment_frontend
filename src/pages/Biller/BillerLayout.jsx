import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const BillerLayout = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '220px', background: '#f1f1f1', padding: '1rem' }}>
        <h3>Biller Dashboard</h3>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <Link to="/biller/view-bills">View Bills</Link>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <Link to="/biller/generate-bill">Generate Bill</Link>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <Link to="/biller/update-profile">Update Profile</Link>
          </li>
        </ul>
      </div>

      {}
      <div style={{ flex: 1, padding: '1rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default BillerLayout;
