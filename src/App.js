import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RevenueCard from "./components/RevenueCard";
import OrderTimeCard from "./components/OrderTimeCard";
import RatingCard from "./components/RatingCard";
import MostOrderedFood from "./components/MostOrderedFood";
import OrderGraph from "./components/OrderGraph";

function App() {
  return (
    <div className="flex min-h-screen bg-[#f6f7fb] text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col bg-white border-l border-gray-200">
        {/* Header */}
        <Header />

        {/* Dashboard Main Content */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Dashboard
          </h2>

          {/* === Top Section === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border border-gray-200 rounded-lg p-6">
            <RevenueCard />
            <OrderTimeCard />
          </div>

          {/* === Bottom Section === */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border border-gray-200 rounded-lg p-6 mt-6">
            <RatingCard />
            <MostOrderedFood />
            <OrderGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function App() {
  return (
    <Routes>
      {/* Redirect root `/` to `/dashboard` */}
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;










