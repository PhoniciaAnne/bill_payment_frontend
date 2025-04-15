import React, { useState, useEffect } from 'react';
import { viewBillers, removeBiller } from '../../services/adminService';
import Button from '../../components/Button/Button';

const AdminViewBillers = () => {
  const [billers, setBillers] = useState([]);
  const [message, setMessage] = useState('');

  const fetchBillers = async () => {
    try {
      const res = await viewBillers();
      setBillers(res.data);
      setMessage('');
    } catch (error) {
      console.error(error);
      setMessage('Failed to fetch billers.');
    }
  };

  const handleRemove = async (billerId) => {
    try {
      await removeBiller(billerId);
      setMessage(`Removed biller with ID: ${billerId}`);
      fetchBillers();
    } catch (error) {
      console.error(error);
      setMessage('Remove failed.');
    }
  };

  useEffect(() => {
    fetchBillers();
  }, []);

  return (
    <div>
      <h2>All Billers</h2>
      <Button onClick={fetchBillers}>Refresh</Button>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}

      <ul style={{ marginTop: '1rem' }}>
        {billers.map((biller) => (
          <li key={biller.billerId} style={{ marginBottom: '0.5rem' }}>
            <p>Name: {biller.billerName}</p>
            <p>Username: {biller.billerUsername}</p>
            <p>ID: {biller.billerId}</p>
            <Button onClick={() => handleRemove(biller.billerId)}>Remove</Button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminViewBillers;
