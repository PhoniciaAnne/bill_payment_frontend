import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:7981';

// Sign up a Customer
export const signupCustomer = async (customerData) => {
  return axios.post(`${API_BASE_URL}/auth/signup/customer`, customerData);
};

// Sign up a Biller
export const signupBiller = async (billerData) => {
  return axios.post(`${API_BASE_URL}/auth/signup/biller`, billerData);
};

// Login a Customer
export const loginCustomer = async (loginData) => {
  // loginData = { username, password }
  return axios.post(`${API_BASE_URL}/auth/login/customer`, loginData);
};

// Login a Biller
export const loginBiller = async (loginData) => {
  // loginData = { username, password }
  return axios.post(`${API_BASE_URL}/auth/login/biller`, loginData);
};
