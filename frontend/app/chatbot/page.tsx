"use client";

import { useState } from "react";
import axios from "axios";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatbotPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI Health Insurance Advisor. Ask me anything about insurance.",
    },
  ]);

  const askAI = async () => {
    if (!query.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    


    try {

        const savedPrediction = localStorage.getItem(
            "latest_prediction"
        );

        let userProfile = null;

        if (savedPrediction) {
            const parsed = JSON.parse(savedPrediction);

            userProfile = {
            ...parsed.formData,
            Predicted_Premium:
                parsed.result.predicted_premium
            };
        }

        const res = await axios.post(
            "http://127.0.0.1:8000/chat",
            {
            query,
            user_profile: userProfile
            }
        );


      const aiMessage: Message = {
        role: "assistant",
        content: res.data.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setQuery("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        AI Insurance Assistant
      </h1>

      <div className="bg-white rounded-xl shadow p-4 h-[500px] overflow-y-auto space-y-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl max-w-[80%] ${
              msg.role === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-gray-100"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="bg-gray-100 p-3 rounded-xl max-w-[80%]">
            Thinking...
          </div>
        )}
      </div>

      <div className="flex mt-4 gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about insurance..."
          className="flex-1 border p-3 rounded-lg"
        />

        <button
          onClick={askAI}
          className="bg-blue-600 text-white px-6 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}