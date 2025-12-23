import React from "react";

function QueueDisplay({ data, onStatChange, onRemove }) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-2xl p-6 shadow-xl">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-white mb-6">
        Current Queue
      </h2>

      {/* Empty State */}
      {data.length === 0 ? (
        <p className="text-gray-400">
          No Customer available
        </p>
      ) : (
        <div className="space-y-4">
          {data.map((cust, index) => (
            <div
              key={index}
              className="bg-black/40 border border-white/10 rounded-xl p-4 flex items-center justify-between"
            >
              {/* Left Info */}
              <div>
                <p className="font-semibold text-white">
                  {cust.name}
                </p>
                <p className="text-sm text-gray-400">
                  Service: {cust.service}
                </p>

                {/* Status */}
                <p
                  className={`text-sm mt-1 ${
                    cust.status === "completed"
                      ? "text-blue-400"
                      : "text-yellow-400"
                  }`}
                >
                  {cust.status}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                {cust.status==='waiting' && <button
                  onClick={()=>onStatChange(cust.id,"completed")}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Serve
                </button>}
                

                <button
                  onClick={()=>onRemove(cust.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;