"use client";

import { useState } from "react";
import axios from "axios";

export default function PredictPage() {

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const [formData, setFormData] = useState({
    Age: 30,
    Number_of_Dependants: 0,
    Income_in_Lakhs: 10,
    Genetical_Risk: 0,
    Insurance_Plan: "Silver",
    Employment_Status: "Salaried",
    Gender: "Male",
    Marital_Status: "Unmarried",
    BMI_Category: "Normal",
    Smoking_Status: "No Smoking",
    Region: "Northwest",
    Medical_History: "No Disease",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const predict = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        formData
      );

      setResult(response.data);

      localStorage.setItem(
            "latest_prediction",
            JSON.stringify({
                formData,
                result: response.data
            })
        );
    setResult(response.data);


    } catch (error) {
      console.log(error);
      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };
  const downloadReport = async () => {

        const response = await axios.post(
            "http://127.0.0.1:8000/generate-report",
            formData,
            {
                responseType: "blob",
            }
        );

        const url = window.URL.createObjectURL(
            new Blob([response.data])
        );

        const link = document.createElement("a");

        link.href = url;

        link.setAttribute(
            "download",
            "InsuraWise_Report.pdf"
        );

        document.body.appendChild(link);

        link.click();

        link.remove();
    };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center mb-8">
        Health Insurance Premium Predictor
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
        <label className="block mb-1 font-medium">
            Age
        </label>

        <input
          name="Age"
          type="number"
          value={formData.Age}
          placeholder="Age"
          className="border p-3 rounded text-black bg-white"
          onChange={handleChange}
        />
        </div>

        <div>
        <label className="block mb-1 font-medium">
            Number_of_Dependants
        </label>

        <input
          name="Number_of_Dependants"
          type="number"
          value={formData.Number_of_Dependants}
          placeholder="Dependants"
          className="border p-3 rounded text-black bg-white"
          onChange={handleChange}
        />
        </div>


        <div>
        <label className="block mb-1 font-medium">
            Income in lakhs
        </label>
        <input
          name="Income_in_Lakhs"
          type="number"
          value={formData.Income_in_Lakhs}
          placeholder="Income (Lakhs)"
          className="border p-3 rounded text-black bg-white"
          onChange={handleChange}
        />
        </div>


        <div>
        <label className="block mb-1 font-medium">
            Genetical risk
        </label>
        <input
          name="Genetical_Risk"
          type="number"
          min="0"
          max="5"
          value={formData.Genetical_Risk}
          placeholder="Genetical Risk"
          className="border p-3 rounded text-black bg-white"
          onChange={handleChange}
        />
        </div>


        <div>
        <label className="block mb-1 font-medium">
            Insurance Plan
        </label>

        <select
          name="Insurance_Plan"
          value={formData.Insurance_Plan}
          className="border p-3 rounded text-black bg-white"
          onChange={handleChange}
        >
          <option>Bronze</option>
          <option>Silver</option>
          <option>Gold</option>
        </select>
        </div>


        <div>
        <label className="block mb-1 font-medium">
            Employment status
        </label>
        <select
          name="Employment_Status"
          value={formData.Employment_Status}
          className="border p-3 rounded text-black bg-white"
          onChange={handleChange}
        >
          <option>Salaried</option>
          <option>Self-Employed</option>
          <option>Freelancer</option>
        </select>
        </div>


        <div>
        <label className="block mb-1 font-medium">
            Gender
        </label>
        <select
          name="Gender"
          value={formData.Gender}
          className="border p-3 rounded text-black bg-white"
          onChange={handleChange}
        >
          <option>Male</option>
          <option>Female</option>
        </select>
        </div>

        <div>
        <label className="block mb-1 font-medium">
            Marital Status
        </label>
        <select
          name="Marital_Status"
          value={formData.Marital_Status}
          className="border p-3 rounded text-black bg-white"
          onChange={handleChange}
        >
          <option>Unmarried</option>
          <option>Married</option>
        </select>
        </div>

        <div>
        <label className="block mb-1 font-medium">
            BMI category
        </label>
        <select
          name="BMI_Category"
          value={formData.BMI_Category}
          className="border p-3 rounded text-black bg-white"
          onChange={handleChange}
        >
          <option>Normal</option>
          <option>Underweight</option>
          <option>Overweight</option>
          <option>Obesity</option>
        </select>
        </div>

        <div>
        <label className="block mb-1 font-medium">
            Smoking status
        </label>
        <select
          name="Smoking_Status"
          value={formData.Smoking_Status}
          className="border p-3 rounded text-black bg-white"
          onChange={handleChange}
        >
          <option>No Smoking</option>
          <option>Occasional</option>
          <option>Regular</option>
        </select>
        </div>


        <div>
        <label className="block mb-1 font-medium">
            Region
        </label>
        <select
          name="Region"
          value={formData.Region}
          className="border p-3 rounded text-black bg-white"
          onChange={handleChange}
        >
          <option>Northwest</option>
          <option>Northeast</option>
          <option>Southeast</option>
          <option>Southwest</option>
        </select>
        </div>

        <div>
        <label className="block mb-1 font-medium">
            Medical History
        </label>
        <select
          name="Medical_History"
          value={formData.Medical_History}
          className="border p-3 rounded text-black bg-white"
          onChange={handleChange}
        >
          <option>No Disease</option>
          <option>Diabetes</option>
          <option>High blood pressure</option>
          <option>Heart disease</option>
          <option>Thyroid</option>
          <option>Diabetes & High blood pressure</option>
          <option>Diabetes & Thyroid</option>
          <option>Diabetes & Heart disease</option>
        </select>
        </div>


      </div>

      <div className="text-center mt-8">
        <button
          onClick={predict}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg"
        >
          {loading ? "Predicting..." : "Predict Premium"}
        </button>
      </div>

      {result && (
        <div className="mt-10 bg-white p-6 rounded-lg shadow">


          <div className="border-b pb-4 mb-4">
            <h2 className="text-3xl font-bold">
                Prediction Results
            </h2>
        </div>

          <p className="text-4xl text-green-600 font-bold mt-3">
            ₹{result.predicted_premium.toLocaleString("en-IN")}
          </p>

          {result.risk && (
            <div className="mt-4">

                <span
                className={`px-4 py-2 rounded-full text-white font-bold ${
                    result.risk.color === "green"
                    ? "bg-green-500"
                    : result.risk.color === "yellow"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                >
                {result.risk.level} (Score: {result.risk.score})
                </span>

            </div>
            )}

            {result.explanation && (
  <div className="mt-6 bg-white p-6 rounded-xl shadow">

    <h3 className="text-xl font-bold mb-4">
      Why is your premium this amount?
    </h3>

    {result.explanation.map(
        (item: any, index: number) => (
            <div
            key={index}
            className="border-b py-3"
            >
            <p className="font-semibold">
                {item.factor} ({item.impact} Impact)
            </p>

            <p className="text-gray-600">
                {item.reason}
            </p>
            </div>
        )
        )}

    </div>
    )}
          

          

          {result.advisory && (
            <div className="mt-8 space-y-6">

                <div className="bg-blue-50 p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-2">
                    AI Summary
                </h3>

                <p className="leading-7 text-gray-700">
                    {result.advisory.summary || "No summary available."}
                </p>

                </div>

                <div className="bg-green-50 p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-2">
                    Recommended Cover
                </h3>
                <p className="text-2xl font-semibold text-green-700">
                    {result.advisory.recommended_cover}
                </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-2">
                    Factors Affecting Premium
                </h3>

                <ul className="list-disc pl-5">
                    {result.advisory.premium_factors?.map(
                    (item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    )
                    )}
                </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-2">
                    How to Reduce Premium
                </h3>

                <ul className="list-disc pl-5">
                    {result.advisory.reduce_premium?.map(
                    (item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    )
                    )}
                </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-2">
                    Insurance Buying Advice
                </h3>

                <ul className="list-disc pl-5">
                    {result.advisory.buying_advice?.map(
                    (item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    )
                    )}
                </ul>
                </div>

                
                <button 
                    onClick={downloadReport}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
                    Download Report PDF
                </button>

            </div>
            )}

        </div>
      )}

    </div>
  );
}