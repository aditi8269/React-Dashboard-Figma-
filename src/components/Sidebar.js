import React from "react";
import { Home, ClipboardList, Settings, CreditCard, Users, HelpCircle } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white p-6 hidden md:flex flex-col justify-between border-r">
      <div>
        <h1 className="text-xl font-bold mb-8 text-blue-600">GoodFood</h1>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-center gap-3 font-medium text-blue-600">
            <Home size={18} /> Dashboard
          </li>
          <li className="flex items-center gap-3">
            <ClipboardList size={18} /> Food Order
          </li>
          <li className="flex items-center gap-3">
            <Users size={18} /> Manage Menu
          </li>
          <li className="flex items-center gap-3">
            <HelpCircle size={18} /> Customer Review
          </li>
        </ul>

        <p className="text-xs mt-10 text-gray-400 uppercase">Others</p>
        <ul className="space-y-3 text-gray-600 mt-2">
          <li className="flex items-center gap-3">
            <Settings size={18} /> Settings
          </li>
          <li className="flex items-center gap-3">
            <CreditCard size={18} /> Payment
          </li>
          <li className="flex items-center gap-3">
            <Users size={18} /> Accounts
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
