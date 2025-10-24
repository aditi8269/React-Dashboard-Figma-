import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { orderGraphData } from "../data/mock";

const OrderGraph = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="font-medium text-gray-600 mb-2">Order Trend</h3>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={orderGraphData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="orders" stroke="#5a67d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrderGraph;
