// src/pages/Admin/AdminViewCustomers.jsx
import React, { useState, useEffect } from 'react';
import { viewCustomers, removeCustomer, editCustomer } from '../../services/adminService';
import Button from '../../components/Button/Button';

const AdminViewCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [message, setMessage] = useState('');

  const fetchCustomers = async () => {
    try {
      const res = await viewCustomers();
      setCustomers(res.data);
      setMessage('');
    } catch (error) {
      console.error(error);
      setMessage('Failed to fetch customers.');
    }
  };

  const handleRemove = async (custId) => {
    try {
      await removeCustomer(custId);
      setMessage(`Removed customer with ID: ${custId}`);
      fetchCustomers();
    } catch (error) {
      console.error(error);
      setMessage('Remove failed.');
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>All Customers</h2>
      <Button onClick={fetchCustomers}>Refresh</Button>
      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}

      <ul style={{ marginTop: '1rem' }}>
        {customers.map((cust) => (
          <li key={cust.custId} style={{ marginBottom: '0.5rem' }}>
            <p>Name: {cust.custName}</p>
            <p>Username: {cust.custUsername}</p>
            <p>ID: {cust.custId}</p>
            <p>Contact: {cust.contactNo}</p>
            <Button onClick={() => handleRemove(cust.custId)}>Remove</Button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminViewCustomers;
