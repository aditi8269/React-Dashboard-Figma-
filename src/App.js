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
      <div className="flex-1 flex flex-col bg-white">
        <Header />
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h2>

          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 items-stretch min-h-[320px] mb-6">
            <div className="lg:col-span-2 h-full">
              <RevenueCard />
            </div>
            <div className="lg:col-span-1 h-full">
              <OrderTimeCard />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 items-stretch border-t border-gray-200 mt-0 min-h-[280px]">
            <div className="h-full">
              <RatingCard />
            </div>
            <div className="h-full">
              <MostOrderedFood />
            </div>
            <div className="h-full">
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
      {/* Redirect root `/` to `/dashboard` */}
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;










