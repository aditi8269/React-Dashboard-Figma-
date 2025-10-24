import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 rounded shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded px-3 py-1 w-1/3"
      />
      <div className="flex items-center gap-4">
        <p className="font-medium">Delicious Burger 🍔</p>
        <img
          src="https://via.placeholder.com/35"
          alt="profile"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
