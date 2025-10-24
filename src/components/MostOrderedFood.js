const foods = [
  { name: "Fresh Salad Bowl", price: "IDR 45.000" },
  { name: "Chicken Noodles", price: "IDR 75.000" },
  { name: "Smoothie Fruits", price: "IDR 55.000" },
  { name: "Hot Chicken Wings", price: "IDR 49.000" },
];

const MostOrderedFood = () => {
  return (
    <div className="bg-white p-6 shadow">
      <h3 className="font-medium text-gray-600 ">Most Ordered Food</h3>
      <ul className="space-y-2">
        {foods.map((food, i) => (
          <li key={i} className="flex justify-between text-gray-600">
            <span>{food.name}</span>
            <span>{food.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostOrderedFood;

