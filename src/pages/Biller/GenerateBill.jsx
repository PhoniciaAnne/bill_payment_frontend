import React, { useState } from 'react';
import { generateBill } from '../../services/billerService';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const BillerGenerateBill = () => {
  const [form, setForm] = useState({
    billerId: '',
    customerId: '',
    amount: '',
    billIssuedDate: '',
    dueDate: '',
    status: 'Unpaid'
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleGenerate = async () => {
    try {
      await generateBill({
        ...form,
        amount: parseFloat(form.amount),
        
      });
      setMessage('Bill generated successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Failed to generate bill.');
    }
  };

  return (
    <div>
      <h2>Generate Bill</h2>
      <Input label="Biller ID" name="billerId" value={form.billerId} onChange={handleChange} />
      <Input label="Customer ID" name="customerId" value={form.customerId} onChange={handleChange} />
      <Input label="Amount" name="amount" value={form.amount} onChange={handleChange} />
      <Input label="Issued Date" type="date" name="billIssuedDate" value={form.billIssuedDate} onChange={handleChange} />
      <Input label="Due Date" type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
      <Button onClick={handleGenerate}>Generate</Button>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
};

export default BillerGenerateBill;
