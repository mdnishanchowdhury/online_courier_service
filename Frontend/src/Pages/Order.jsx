import { useState } from "react";
import { motion } from "framer-motion";
import { FiPackage, FiRefreshCw } from "react-icons/fi";

const Order = () => {

  const parcels = [
    { id: 1, from: "New York", to: "Los Angeles", sender: "John", recipient: "Alice", note: "Fragile" },
    { id: 2, from: "Chicago", to: "Houston", sender: "Mike", recipient: "Sara", note: "Handle with care" },
    { id: 3, from: "Miami", to: "Seattle", sender: "David", recipient: "Emma", note: "Perishable" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100">
              <FiPackage className="text-xl text-indigo-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">All Parcel Orders</h1>
              <p className="text-sm text-gray-500">Manage and track all parcel deliveries</p>
            </div>
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800">
              {parcels.length} items
            </span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-white text-indigo-600 hover:bg-indigo-50 border border-indigo-100 hover:shadow-sm">
            <FiRefreshCw />
            Refresh
          </button>
        </motion.div>

        {/* Table with animated rows */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">From</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Sender</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Recipient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {parcels.map((parcel, index) => (
                <motion.tr
                  key={parcel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <td className="px-6 py-4 text-gray-600">{parcel.from}</td>
                  <td className="px-6 py-4 text-gray-600">{parcel.to}</td>
                  <td className="px-6 py-4 text-gray-600">{parcel.sender}</td>
                  <td className="px-6 py-4 text-gray-600">{parcel.recipient}</td>
                  <td className="px-6 py-4 text-gray-600 truncate" title={parcel.note}>{parcel.note}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
