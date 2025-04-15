import React, { useState, useEffect } from 'react';
import { viewAllBills } from '../../services/billerService';
import Button from '../../components/Button/Button';

const BillerViewBills = () => {
  const [bills, setBills] = useState([]);
  const [message, setMessage] = useState('');

  const fetchBills = async () => {
    try {
      const res = await viewAllBills();
      setBills(res.data);
      setMessage('');
    } catch (error) {
      console.error(error);
      setMessage('Failed to fetch bills.');
    }
  };

  useEffect(() => {
    fetchBills();
  }, []);

  return (
    <div>
      <h2>All Bills</h2>
      <Button onClick={fetchBills}>Refresh Bills</Button>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}

      <ul style={{ marginTop: '1rem' }}>
        {bills.map((bill) => (
          <li key={bill.billId} style={{ marginBottom: '0.5rem' }}>
            <p>Bill ID: {bill.billId}</p>
            <p>Customer ID: {bill.customer?.custId}</p>
            <p>Amount: {bill.amount}</p>
            <p>Status: {bill.status}</p>
            <p>Due Date: {bill.dueDate}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillerViewBills;
