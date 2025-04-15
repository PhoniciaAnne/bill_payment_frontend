import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:7891';

export const viewBill = async (custId) => {
  return axios.get(`${API_BASE_URL}/customer/viewBill`, {
    params: { cust_id: custId },
  });
};

export const payBill = async (billId, custId, amt) => {
  return axios.post(
    `${API_BASE_URL}/customer/payBill`,
    {},
    {
      params: { bill_id: billId, cust_id: custId, amt },
    }
  );
};

export const requestCustomerUpdate = async (customerData) => {
  return axios.post(`${API_BASE_URL}/customer/requestCustomerUpdate`, customerData);
};
