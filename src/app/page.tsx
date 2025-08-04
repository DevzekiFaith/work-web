import Link from "next/link";
// import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Mindvest
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-xl">
          We specialize in architectural design, construction, software
          solutions, space planning, and <span className="font-bold text-purple-600 text-lg">human capital development.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/services"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition"
          >
            Explore Services
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
