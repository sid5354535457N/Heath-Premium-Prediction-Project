import Link from "next/link";
import { FaRobot, FaHistory } from "react-icons/fa";
import { MdCalculate } from "react-icons/md";
import { Oval } from "react-loader-spinner";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          InsuraWise AI
        </Link>

        <div className="flex gap-6">

          <Link href="/predict" className="flex items-center gap-2">
            <MdCalculate />
                Predict
            </Link>

            <Link href="/chatbot" className="flex items-center gap-2">
            <FaRobot />
                Chatbot
            </Link>

            <Link href="/history" className="flex items-center gap-2">
            <FaHistory />
                History
            </Link>

          <Link href="/bmi">
            BMI
          </Link>


          
          <Link href="/about">About</Link>

            
            

        </div>

      </div>
    </nav>
  );
}