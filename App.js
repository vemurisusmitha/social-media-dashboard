import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from './auth/Login';
import Signup from './auth/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import Demographics from './pages/Demographics/Demographics';
import Earnings from './pages/Earnings/Earnings'; 
import Settings from './pages/Settings/Settings';
import Users from './pages/Users/Users';
import Alerts from './pages/Alerts/Alerts';
export default function App() {
  return (
    
     <BrowserRouter>
     <Routes>
      <Route index element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route index element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/earnings" element={<Earnings />} />
      <Route path="/demographics" element={<Demographics />} />
      <Route path="/users" element={<Users />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/alerts" element={<Alerts />} />

    
  </Routes>
  </BrowserRouter>
  
  )
}
