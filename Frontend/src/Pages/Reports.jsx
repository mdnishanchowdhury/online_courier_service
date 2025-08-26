import { FiUsers, FiUserCheck, FiUserX, FiBox, FiTag, FiDollarSign } from "react-icons/fi";

const Reports = () => {
  // Dummy summary data
  const userSummary = [
    { title: "Total Users", value: 450, icon: <FiUsers className="text-2xl text-white" />, bg: "bg-blue-500" },
    { title: "Active Users", value: 320, icon: <FiUserCheck className="text-2xl text-white" />, bg: "bg-green-500" },
    { title: "Inactive Users", value: 130, icon: <FiUserX className="text-2xl text-white" />, bg: "bg-red-500" },
  ];

  const productSummary = [
    { title: "Total Orders", value: 120, icon: <FiBox className="text-2xl text-white" />, bg: "bg-indigo-500" },
    { title: "Chancels", value: 95, icon: <FiTag className="text-2xl text-white" />, bg: "bg-green-500" },
    { title: "Orders", value: 25, icon: <FiDollarSign className="text-2xl text-white" />, bg: "bg-red-500" },
  ];

  // Dummy user data
  const userData = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", role: "User" },
    { id: 3, name: "Alice Brown", email: "alice@example.com", status: "Active", role: "User" },
  ];

  // Dummy product data
  const productData = [
    { id: 1, name: "Product A", category: "Electronics", price: 99.99, stock: "Chancel" },
    { id: 2, name: "Product B", category: "Clothing", price: 49.99, stock: "Order Donne" },
    { id: 3, name: "Product C", category: "Books", price: 19.99, stock: "Chancel" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
      
        {/* Product Summary */}
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Product Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {productSummary.map((item, idx) => (
            <div key={idx} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className={`p-3 rounded-full ${item.bg} flex items-center justify-center mr-4`}>
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{item.title}</p>
                <p className="text-xl font-bold text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Price ($)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Orders</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {productData.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-600">{product.name}</td>
                  <td className="px-6 py-4 text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 text-gray-600">{product.price.toFixed(2)}</td>
                  <td className={`px-6 py-4 font-medium ${product.stock === "In Stock" ? "text-green-600" : "text-red-600"}`}>
                    {product.stock}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
