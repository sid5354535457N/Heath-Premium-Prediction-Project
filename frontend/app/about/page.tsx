export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-5xl font-bold text-center mb-4">
        AI-Powered Health Insurance Premium Prediction and Personalized Advisory Platform
      </h1>

      <p className="text-center text-gray-600 mb-10">
        An AI-driven InsurTech platform that predicts health insurance premiums
        and provides personalized advisory using Machine Learning and LLMs.
      </p>

      {/* Features */}
      <div className="bg-white shadow rounded-xl p-6 mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Features
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Health Insurance Premium Prediction</li>
          <li>AI Personalized Advisory using Groq LLM</li>
          <li>Risk Meter Analysis</li>
          <li>BMI Calculator</li>
          <li>AI Insurance Chatbot</li>
          <li>PDF Report Generation</li>
          <li>Prediction History Tracking</li>
          <li>Explainable AI</li>
        </ul>

      </div>

      {/* Tech Stack */}
      <div className="bg-white shadow rounded-xl p-6 mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Technology Stack
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <h3 className="font-bold">Frontend</h3>
            <p>Next.js, TypeScript, Tailwind CSS</p>
          </div>

          <div>
            <h3 className="font-bold">Backend</h3>
            <p>FastAPI, Python</p>
          </div>

          <div>
            <h3 className="font-bold">Machine Learning</h3>
            <p>XGBoost, Scikit-Learn, Joblib</p>
          </div>

          <div>
            <h3 className="font-bold">AI</h3>
            <p>Groq API (Llama 3.3 70B)</p>
          </div>

          <div>
            <h3 className="font-bold">Database</h3>
            <p>SQLite + SQLAlchemy</p>
          </div>

        </div>

      </div>

      {/* Team */}
      <div className="bg-white shadow rounded-xl p-6">

        <h2 className="text-3xl font-bold mb-6">
          Development Team
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-4 rounded-lg">
            <h3 className="font-bold text-xl">
              Siddhant Bisen
            </h3>

            <p className="text-blue-600 font-semibold">
              Team Lead
            </p>

            <p className="mt-2 text-gray-700">
              Data preprocessing, AI integration,
              fine-tuning, project coordination.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-bold text-xl">
              Viraj Khairnar
            </h3>

            <p className="text-blue-600 font-semibold">
              Backend Developer
            </p>

            <p className="mt-2 text-gray-700">
              Backend APIs and database integration.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-bold text-xl">
              Harshit Runwal
            </h3>

            <p className="text-blue-600 font-semibold">
              ML Developer
            </p>

            <p className="mt-2 text-gray-700">
              Machine learning model development
              and optimization.
            </p>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="font-bold text-xl">
              Siddharth Vitkar
            </h3>

            <p className="text-blue-600 font-semibold">
              Frontend Developer & Designer
            </p>

            <p className="mt-2 text-gray-700">
              UI/UX design and frontend implementation.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}