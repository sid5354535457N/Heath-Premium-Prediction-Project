import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-6xl font-extrabold text-gray-900">
          AI-Powered Health Insurance Premium Prediction
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Personalized Advisory Platform using Machine Learning and AI
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            href="/predict"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg"
          >
            Predict Premium
          </Link>

          <Link
            href="/chatbot"
            className="bg-white hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg"
          >
            Talk to AI
          </Link>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-10">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "🤖 AI Advisory",
            "📈 Premium Prediction",
            "🛡️ Risk Meter",
            "📄 PDF Report",
            "💬 AI Chatbot",
            "⚖️ BMI Calculator",
          ].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* How It Works */}
      <section className="bg-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div>
              <div className="text-5xl">1️⃣</div>
              <p className="mt-3">
                Enter Health Details
              </p>
            </div>

            <div>
              <div className="text-5xl">2️⃣</div>
              <p className="mt-3">
                Predict Premium
              </p>
            </div>

            <div>
              <div className="text-5xl">3️⃣</div>
              <p className="mt-3">
                Receive AI Advisory
              </p>
            </div>

            <div>
              <div className="text-5xl">4️⃣</div>
              <p className="mt-3">
                Download Report
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-10">
          Development Team
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold">
              Siddhant Bisen
            </h3>
            <p className="text-blue-600 font-semibold">
              Team Lead
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold">
              Viraj Khairnar
            </h3>
            <p className="text-blue-600 font-semibold">
              Backend Developer
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold">
              Harshit Runwal
            </h3>
            <p className="text-blue-600 font-semibold">
              ML Developer
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold">
              Siddharth Vitkar
            </h3>
            <p className="text-blue-600 font-semibold">
              Frontend Developer & Designer
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">

  <p className="font-semibold">
    AI-Powered Health Insurance Premium Prediction and Personalized Advisory Platform
  </p>

  <p className="mt-2 text-gray-400">
    © 2026 PCCOER Final Year Project
  </p>

  <div className="mt-4 text-sm text-gray-400">
    Developed by:

    <div className="mt-2">
      Siddhant Bisen (Team Lead) |
      Viraj Khairnar (Backend) |
      Harshit Runwal (ML) |
      Siddharth Vitkar (Frontend)
    </div>
  </div>

</footer>

    </main>
  );
}