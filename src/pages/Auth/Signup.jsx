import React, { useState } from 'react';
import { signupCustomer, signupBiller } from '../../services/authService';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Signup = () => {
  const [role, setRole] = useState('customer');
  const [formData, setFormData] = useState({
    custName: '',
    custUsername: '',
    custPassword: '',
    contactNo: '',
    billerName: '',
    billerUsername: '',
    billerPassword: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (role === 'customer') {
        res = await signupCustomer({
          custName: formData.custName,
          custUsername: formData.custUsername,
          custPassword: formData.custPassword,
          contactNo: formData.contactNo
        });
      } else {
        res = await signupBiller({
          billerName: formData.billerName,
          billerUsername: formData.billerUsername,
          billerPassword: formData.billerPassword
        });
      }
      const data = res.data;
      if (role === 'customer') {
        setMessage(`Signup successful! Customer ID: ${data.custId}`);
      } else {
        setMessage(`Signup successful! Biller ID: ${data.billerId}`);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Role:&nbsp;</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="customer">Customer</option>
            <option value="biller">Biller</option>
          </select>
        </div>

        {role === 'customer' && (
          <>
            <Input
              label="Name"
              name="custName"
              value={formData.custName}
              onChange={handleChange}
            />
            <Input
              label="Username"
              name="custUsername"
              value={formData.custUsername}
              onChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              name="custPassword"
              value={formData.custPassword}
              onChange={handleChange}
            />
            <Input
              label="Contact No"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
            />
          </>
        )}

        {role === 'biller' && (
          <>
            <Input
              label="Biller Name"
              name="billerName"
              value={formData.billerName}
              onChange={handleChange}
            />
            <Input
              label="Biller Username"
              name="billerUsername"
              value={formData.billerUsername}
              onChange={handleChange}
            />
            <Input
              label="Biller Password"
              type="password"
              name="billerPassword"
              value={formData.billerPassword}
              onChange={handleChange}
            />
          </>
        )}

        <Button type="submit">Sign Up</Button>
      </form>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
};

export default Signup;
