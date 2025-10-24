import React from "react";

const RatingCard = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="font-medium text-gray-600 mb-2">Your Rating</h3>
      <p className="text-gray-400 text-sm mb-4">
        Lorem ipsum dolor sit amet, consectetur.
      </p>
      <div className="flex justify-around items-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
            92%
          </div>
          <p className="text-sm mt-2 text-gray-500">Packaging</p>
        </div>
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-xl">
            85%
          </div>
          <p className="text-sm mt-2 text-gray-500">Food Taste</p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
