import React from "react";
import { FiMenu } from "react-icons/fi";

export default function Navbar({ setSidebarOpen }) {
  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 shadow-md sticky top-0 z-10">
      <button
        onClick={() => setSidebarOpen((p) => !p)}
        className="text-purple-700 dark:text-yellow-400"
      >
        <FiMenu size={24} />
      </button>
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Welcome to PromoGPT
      </h1>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-yellow-400 text-gray-800 flex items-center justify-center font-bold">
          B
        </div>
      </div>
    </header>
  );
}
