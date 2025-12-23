import React, { useState } from "react";

function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleAdd = () => {
    if (!name || !service) return;
    onAdd(name, service);
    setName("");
    setService("");
  };

  return (
    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-xl">
      <h1 className="text-xl font-semibold text-indigo-400 mb-4">
        Add To Queue
      </h1>

      <div className="space-y-4">
        {/* Name Input */}
        <input
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Service Select */}
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Service</option>
          <option value="Payment">Payment</option>
          <option value="Consult">Consult</option>
          <option value="Review">Review</option>
          <option value="Other">Other</option>
        </select>

        {/* Button */}
        <button
          onClick={handleAdd}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-lg transition disabled:opacity-50"
        >
          Add Customer
        </button>
      </div>
    </div>
  );
}

export default QueueForm;