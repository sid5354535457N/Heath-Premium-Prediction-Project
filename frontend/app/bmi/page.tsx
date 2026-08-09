"use client";

import { useState } from "react";
import axios from "axios";

export default function BMIPage() {

  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  const [result, setResult] = useState<any>(null);

  const calculate = async () => {

    const res = await axios.get(
      `http://127.0.0.1:8000/bmi?weight=${weight}&height=${height}`
    );

    setResult(res.data);
  };

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-6">
        BMI Calculator
      </h1>

      <input
        type="number"
        value={weight}
        onChange={(e) =>
          setWeight(Number(e.target.value))
        }
        className="border p-2 mr-2"
        placeholder="Weight"
      />

      <input
        type="number"
        value={height}
        onChange={(e) =>
          setHeight(Number(e.target.value))
        }
        className="border p-2"
        placeholder="Height"
      />

      <button
        onClick={calculate}
        className="bg-blue-600 text-white px-4 py-2 ml-2 rounded"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-6">

          <p>
            BMI: {result.bmi}
          </p>

          <p>
            Category: {result.category}
          </p>

        </div>
      )}

    </div>
  );
}