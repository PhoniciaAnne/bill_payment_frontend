
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:7981';

export const viewAllBills = async () => {
  return axios.get(`${API_BASE_URL}/biller/viewBill`);
};

export const generateBill = async (billDTO) => {
  return axios.post(`${API_BASE_URL}/biller/generateBill`, billDTO);
};

export const editBill = async (editBillDTO) => {
  return axios.patch(`${API_BASE_URL}/biller/editBill`, editBillDTO);
};

export const requestBillerUpdate = async (billerData) => {
  return axios.post(`${API_BASE_URL}/biller/requestBillerUpdate`, billerData);
};
