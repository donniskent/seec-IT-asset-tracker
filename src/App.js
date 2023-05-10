import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/employees/Employees";
import Device from "./pages/devices/Device";
import Layout from "./components/Layout";
export default function App() {
  return (
    <div>
      <Layout />
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="employees" element={<Employees />} />
          <Route path="device" element={<Device />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}