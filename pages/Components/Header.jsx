// components/Header.js
import React from "react";
import {
  ChatBubbleBottomCenterIcon,
  CogIcon,
  BellIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white py-3 ">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-semibold text-gray-500">Leads</h1>
        <div className="relative hidden sm:block">
          <MagnifyingGlassIcon className="absolute top-2.5 left-4 h-4 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email or room..."
            className="w-64 rounded-lg bg-gray-50 py-2 pl-10 pr-3 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Mobile Search Icon */}
        <button className="sm:hidden flex items-center justify-center">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
        </button>

        {/* Chat Icon */}
        <button className="flex items-center justify-center">
          <img
            src="https://static-00.iconduck.com/assets.00/robot-icon-1936x2048-ajs789m0.png"
            className="h-6 w-6 text-gray-600 hover:text-gray-800"
            aria-hidden="true"
          />
        </button>

        <button className="flex items-center justify-center">
          <img
            src="https://media.istockphoto.com/id/1461365299/vector/headphone-silhouette-icon-with-microphone-vector.jpg?s=612x612&w=0&k=20&c=Go9VV_WX3uWw6DEZRv39azYc8j_THXuYd-_DX7RFk40="
            className="h-6 w-6 text-gray-600 hover:text-gray-800"
            aria-hidden="true"
          />
        </button>

        {/* Notification Icon */}
        <button className="relative flex items-center justify-center">
          <img
            src="https://pngimg.com/d/bell_PNG53481.png"
            className="h-6 w-6 text-gray-600 hover:text-gray-800"
            aria-hidden="true"
          />
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            25
          </span>
        </button>

        {/* User Icon */}
        <button className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center">
          <UserCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Header;
