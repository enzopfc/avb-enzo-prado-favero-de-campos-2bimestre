import React from "react";

export default function AdviceCard({ advice }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 mt-4">
      <h2 className="text-xl font-bold mb-2">Conselho do dia</h2>
      <p className="text-gray-700">{advice}</p>
    </div>
  );
}
