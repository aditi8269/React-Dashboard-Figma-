
import { PieChart, Pie, Cell } from "recharts";
import { summaryData } from "../data/mock";

const COLORS = ["#5a67d8", "#9f7aea", "#a0aec0"];

const OrderTimeCard = () => {
  // Safe fallback to prevent errors in tests
  const data = summaryData?.orderTime || [];

  return (
    <div className="bg-white p-6  border border-gray-200 flex flex-col items-center">
      <h3 className="font-medium text-gray-600 ">Order Time</h3>
      <PieChart width={150} height={150}>
        <Pie data={data} dataKey="value" innerRadius={40} outerRadius={60}>
          {data.map((entry, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="flex justify-around w-full text-sm text-gray-500 ">
        {data.map((item, i) => (
          <p key={i}>
            {item.name} {item.value}%
          </p>
        ))}
      </div>
    </div>
  );
};

export default OrderTimeCard;
