import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:7981';

export const viewBillers = async () => {
  return axios.get(`${API_BASE_URL}/admin/viewBillers`);
};

export const viewCustomers = async () => {
  return axios.get(`${API_BASE_URL}/admin/viewCustomers`);
};

export const removeBiller = async (billerId) => {
  return axios.delete(`${API_BASE_URL}/admin/removeBiller`, {
    params: { biller_id: billerId },
  });
};

export const removeCustomer = async (custId) => {
  return axios.delete(`${API_BASE_URL}/admin/removeCustomer`, {
    params: { cust_id: custId },
  });
};

export const editBiller = async (biller) => {
  return axios.patch(`${API_BASE_URL}/admin/editBiller`, biller);
};

export const editCustomer = async (customer) => {
  return axios.patch(`${API_BASE_URL}/admin/editCustomer`, customer);
};
