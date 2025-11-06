"use client";

import { Search, Bell, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="text-white pb-8 flex items-center justify-between bg-app-bg">
      <div className="max-w-[453px]">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search for tasks, invoices, vendors and more"
            className="text-text-primary rounded-[40px] border-0 focus:outline-none font-urbanist font-normal placeholder:text-text-primary leading-[140%] w-[452px] h-[51px] pl-12 pr-4 py-[11px]"
            style={{
              boxShadow: "0px 0px 10px 0px #A3A3A326 inset",
              background: "#FFFFFF0D",
              border: "1px solid #1B1C22",
            }}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 ml-6">
        <button className="p-2 bg-gray-800 rounded-full relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-teal-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>

        <button className="p-2 bg-gray-800 rounded-full">
          <Settings size={20} />
        </button>

        <div className="flex items-center space-x-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
