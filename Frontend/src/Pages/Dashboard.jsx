import React, { useState } from "react";
import DeliveryInfo from "../Components/Dashboard/DeliveryInfo";
import PaymentInfo from "../Components/Dashboard/PaymentInfo";
import QuickLinks from "../Components/Dashboard/QuickLinks";
import ProfileCompletion from "../Components/Dashboard/ProfileCompletion";

const Dashboard = () => {
  const [dateRange, setDateRange] = useState({
    start: "14-Apr-2025",
    end: "28-Apr-2025"
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Key Stats</h1>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <span>{dateRange.start}</span>
          <span className="mx-2">to</span>
          <span>{dateRange.end}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DeliveryInfo></DeliveryInfo>
          <PaymentInfo></PaymentInfo>
        </div>

        <div className="space-y-6">
          <ProfileCompletion></ProfileCompletion>
          <QuickLinks></QuickLinks>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
