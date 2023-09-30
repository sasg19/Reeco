import React from "react";
import OrderInfo from "../OrderInfo/OrderInfo";
import OrderDashboard from "../OrderDashboard/OrderDashboard";

function Dashboard() {
  return (
    <div className="flex flex-col w-full py-4 px-6 gap-y-6">
      <OrderInfo />
      <OrderDashboard />
    </div>
  );
}

export default Dashboard;
