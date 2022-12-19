import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/dashboard";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
