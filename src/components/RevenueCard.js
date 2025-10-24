import React from "react";

const RevenueCard = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-500 text-sm">Revenue</h3>
          <h1 className="text-2xl font-bold mt-1">IDR 7.852.000</h1>
          <p className="text-green-500 text-sm mt-1">↑ 2.1% vs last week</p>
        </div>
        <button className="text-blue-500 text-sm">View Report</button>
      </div>

      <div >
        <p className="text-gray-400 text-sm mb-2">Sales from 1–12 Dec, 2020</p>
        <div className="h-32 bg-blue-100 rounded flex items-end justify-between px-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-3 bg-blue-500 rounded" style={{ height: `${Math.random() * 80 + 20}px` }}></div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Last 6 days</span>
          <span>Last Week</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
