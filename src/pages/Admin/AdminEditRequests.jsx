import React, { useState } from 'react';
import { editBiller, editCustomer } from '../../services/adminService';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const AdminEditRequests = () => {
  const [billerId, setBillerId] = useState('');
  const [custId, setCustId] = useState('');
  const [message, setMessage] = useState('');

  const handleEditBiller = async () => {
    try {
      await editBiller({ billerId: parseInt(billerId, 10) });
      setMessage(`Biller (ID ${billerId}) updated if any edit requests exist.`);
    } catch (error) {
      console.error(error);
      setMessage('Failed to edit biller.');
    }
  };

  const handleEditCustomer = async () => {
    try {
      await editCustomer({ custId: parseInt(custId, 10) });
      setMessage(`Customer (ID ${custId}) updated if any edit requests exist.`);
    } catch (error) {
      console.error(error);
      setMessage('Failed to edit customer.');
    }
  };

  return (
    <div>
      <h2>Finalize Edit Requests</h2>

      <Input
        label="Biller ID"
        value={billerId}
        onChange={(e) => setBillerId(e.target.value)}
      />
      <Button onClick={handleEditBiller}>Edit Biller</Button>

      <hr />

      <Input
        label="Customer ID"
        value={custId}
        onChange={(e) => setCustId(e.target.value)}
      />
      <Button onClick={handleEditCustomer}>Edit Customer</Button>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
};

export default AdminEditRequests;
