import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';

import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

import CustomerLayout from './pages/Customer/CustomerLayout';
import CustomerViewBills from './pages/Customer/ViewBills';
import CustomerUpdateProfile from './pages/Customer/CustomerUpdateProfile';

import BillerLayout from './pages/Biller/BillerLayout';
import BillerViewBills from './pages/Biller/ViewBills';
import BillerGenerateBill from './pages/Biller/GenerateBill';
import BillerUpdateProfile from './pages/Biller/BillerUpdateProfile';

import AdminLayout from './pages/Admin/AdminLayout';
import AdminViewCustomers from './pages/Admin/AdminViewCustomers';
import AdminViewBillers from './pages/Admin/AdminViewBillers';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: '4rem' }}>
        <Routes>
          {}
          <Route path="/" element={<Home />} />

          {}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />

          {}
          <Route path="/customer" element={<CustomerLayout />}>
            <Route index element={<CustomerViewBills />} />
            <Route path="view-bills" element={<CustomerViewBills />} />
            <Route path="update-profile" element={<CustomerUpdateProfile />} />
          </Route>

          {}
          <Route path="/biller" element={<BillerLayout />}>
            <Route index element={<BillerViewBills />} />
            <Route path="view-bills" element={<BillerViewBills />} />
            <Route path="generate-bill" element={<BillerGenerateBill />} />
            <Route path="update-profile" element={<BillerUpdateProfile />} />
          </Route>

          {}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminViewCustomers />} />
            <Route path="view-customers" element={<AdminViewCustomers />} />
            <Route path="view-billers" element={<AdminViewBillers />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
