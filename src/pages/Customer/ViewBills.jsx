import React, { useState, useEffect } from 'react';
import { viewBill, payBill } from '../../services/customerService';
import Button from '../../components/Button/Button';

const CustomerViewBills = () => {
  const [customerId, setCustomerId] = useState('');
  const [bills, setBills] = useState([]);
  const [message, setMessage] = useState('');

  const handleViewBills = async () => {
    try {
      const res = await viewBill(customerId);
      setBills(res.data);
      setMessage('');
    } catch (error) {
      console.error(error);
      setMessage('Failed to fetch bills.');
    }
  };

  const handlePayBill = async (billId, amt) => {
    try {
      await payBill(billId, customerId, amt);
      setMessage(`Bill ${billId} paid successfully!`);
      handleViewBills();
    } catch (error) {
      console.error(error);
      setMessage('Payment failed.');
    }
  };

  return (
    <div>
      <h2>View Bills</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>Customer ID:</label>
        <input
          type="number"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          style={{ marginLeft: '0.5rem' }}
        />
        <Button onClick={handleViewBills}>Fetch Bills</Button>
      </div>

      {bills.map((bill) => (
        <div key={bill.billId} style={{ marginBottom: '0.5rem' }}>
          <p>Bill ID: {bill.billId}</p>
          <p>Amount: {bill.amount}</p>
          <p>Status: {bill.status}</p>
          {bill.status !== 'Paid' && (
            <Button onClick={() => handlePayBill(bill.billId, bill.amount)}>Pay</Button>
          )}
          <hr />
        </div>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
};

export default CustomerViewBills;
