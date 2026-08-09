"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface HistoryItem {
  id: number;
  age: number;
  premium: number;
  risk_level: string;
  smoking: string;
  medical_history: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/history"
      );

      setHistory(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        Prediction History
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : history.length === 0 ? (
        <p>No predictions found.</p>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full bg-white shadow rounded-lg">

            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Age</th>
                <th className="p-3">Premium</th>
                <th className="p-3">Risk</th>
                <th className="p-3">Smoking</th>
                <th className="p-3">Medical History</th>
              </tr>
            </thead>

            <tbody>
              {history.map((item) => (
                <tr
                  key={item.id}
                  className="border-b text-center"
                >
                  <td className="p-3">
                    {item.id}
                  </td>

                  <td className="p-3">
                    {item.age}
                  </td>

                  <td className="p-3 font-semibold text-green-600">
                    ₹{item.premium.toLocaleString("en-IN")}
                  </td>

                  <td className="p-3">
                    {item.risk_level}
                  </td>

                  <td className="p-3">
                    {item.smoking}
                  </td>

                  <td className="p-3">
                    {item.medical_history}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}