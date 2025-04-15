import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{
        width: '200px', 
        background: '#f1f1f1', 
        padding: '1rem'
      }}>
        <h3>Admin Menu</h3>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          <li>
            <Link to="/admin/view-customers">View Customers</Link>
          </li>
          <li>
            <Link to="/admin/view-billers">View Billers</Link>
          </li>
          {/* More links if needed */}
        </ul>
      </div>

      <div style={{ flex: 1, padding: '1rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
