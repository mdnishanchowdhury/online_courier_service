import { useState } from "react";

const CreateParcel = () => {
  const [inputs, setInputs] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReturnParcel, setIsReturnParcel] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Just simulate form submission
    setTimeout(() => {
      alert(`${isReturnParcel ? "Return Parcel" : "Parcel"} created successfully!`);
      setIsSubmitting(false);
      setInputs({});
      setTrackingNumber("");
    }, 1000);
  };

  const toggleReturnParcel = () => {
    setIsReturnParcel(!isReturnParcel);
    if (!isReturnParcel) {
      setInputs((prev) => ({
        ...prev,
        sendername: prev.recipientname || "",
        senderemail: prev.recipientemail || "",
        recipientname: prev.sendername || "",
        recipientemail: prev.senderemail || "",
        from: prev.to || "",
        to: prev.from || "",
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              {isReturnParcel ? "Create Return Parcel" : "Create New Parcel"}
            </h1>
            <div className="flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isReturnParcel}
                  onChange={toggleReturnParcel}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                <span className="ms-3 text-sm font-medium text-gray-700">
                  {isReturnParcel ? "Return Parcel" : "New Parcel"}
                </span>
              </label>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {isReturnParcel && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Original Parcel Information
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Original Tracking Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter original tracking number"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Sender & Recipient Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sender */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                  {isReturnParcel ? "Return Sender Information" : "Sender Information"}
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder={isReturnParcel ? "Recipient's name" : "Sender's name"}
                    name="sendername"
                    value={inputs.sendername || ""}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder={isReturnParcel ? "Recipient's email" : "Sender's email"}
                    name="senderemail"
                    value={inputs.senderemail || ""}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder={isReturnParcel ? "Original destination" : "Origin location"}
                    name="from"
                    value={inputs.from || ""}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              {/* Recipient */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                  {isReturnParcel ? "Original Sender Information" : "Recipient Information"}
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder={isReturnParcel ? "Original sender's name" : "Recipient's name"}
                    name="recipientname"
                    value={inputs.recipientname || ""}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder={isReturnParcel ? "Original sender's email" : "Recipient's email"}
                    name="recipientemail"
                    value={inputs.recipientemail || ""}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder={isReturnParcel ? "Original origin" : "Destination location"}
                    name="to"
                    value={inputs.to || ""}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              {/* Parcel Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Parcel Details</h3>
                <input
                  type="number"
                  placeholder="Weight (grams)"
                  name="weight"
                  value={inputs.weight || ""}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Cost ($)"
                  name="cost"
                  value={inputs.cost || ""}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Additional Information</h3>
                <input
                  type="date"
                  name="date"
                  value={inputs.date || ""}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <textarea
                  placeholder={isReturnParcel ? "Reason for return..." : "Special instructions..."}
                  name="note"
                  value={inputs.note || ""}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg font-medium text-white transition-colors ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting
                  ? isReturnParcel
                    ? "Creating Return..."
                    : "Creating..."
                  : isReturnParcel
                  ? "Create Return Parcel"
                  : "Create Parcel"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateParcel;
