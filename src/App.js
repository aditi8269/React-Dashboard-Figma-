import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RevenueCard from "./components/RevenueCard";
import OrderTimeCard from "./components/OrderTimeCard";
import RatingCard from "./components/RatingCard";
import MostOrderedFood from "./components/MostOrderedFood";
import OrderGraph from "./components/OrderGraph";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#f6f7fb] text-gray-800">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-white border-l border-gray-200">
        <Header />

        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Dashboard</h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 border border-gray-200 rounded-lg p-6">
              <RevenueCard />
            </div>
            <div className="col-span-1 border border-gray-200 rounded-lg p-6">
              <OrderTimeCard />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <RatingCard />
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <MostOrderedFood />
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <OrderGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;











