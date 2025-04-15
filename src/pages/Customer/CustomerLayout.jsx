import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CustomerLayout = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {}
      <div style={{
        width: '200px', 
        background: '#f1f1f1', 
        padding: '1rem'
      }}>
        <h3>Customer Menu</h3>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          <li>
            <Link to="/customer/view-bills">View Bills</Link>
          </li>
          <li>
            <Link to="/customer/update-profile">Update Profile</Link>
          </li>
          {}
        </ul>
      </div>

      {}
      <div style={{ flex: 1, padding: '1rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerLayout;
