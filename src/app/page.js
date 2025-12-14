"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            ShopEasy
          </Link>
          <div className="space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Shop
            </Link>
            <Link
              href="/signin"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to ShopEasy
            </h1>
            <p className="mb-6 text-lg">
              Buy and sell products easily with our online marketplace. Join
              today and grow your business!
            </p>
            <Link
              href="/signup"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Create Your Account
            </Link>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 relative h-64 w-full"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">Sell Easily</h2>
          <p>List your products and reach thousands of buyers in minutes.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">Shop Smart</h2>
          <p>Find products at the best prices with just a few clicks.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">Fast Delivery</h2>
          <p>Get your orders delivered quickly and safely to your doorstep.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 ShopEasy. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-400 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
