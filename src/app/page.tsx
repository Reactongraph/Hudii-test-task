"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DashboardCards from "@/components/DashboardCards";
import DataTable from "@/components/DataTable";
import AddVendorSidebar from "@/components/AddVendorSidebar";
import { Plus } from "lucide-react";

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [addVendorOpen, setAddVendorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-app-bg">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <div
        className="flex flex-col transition-all duration-300 ease-in-out"
        style={{
          marginLeft: sidebarCollapsed ? "107px" : "300px",
        }}
      >
        <main
          className="flex-1 bg-sidebar-bg py-5 px-[10px]"
        >
          <div
            className="bg-app-bg border border-border-light rounded-[9px] py-5 px-[30px]"
            style={{
              boxShadow: "0px 1px 2px 0px #0000004D, 0px 2px 6px 2px #00000026",
            }}
          >
            <Header />
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-poppins text-sm font-normal text-text-secondary">
                    Tuesday, October 14
                  </p>
                  <h1 className="font-urbanist text-[32px] font-semibold text-text-secondary">
                    Good evening, Lucas
                  </h1>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setAddVendorOpen(true)}
                    className="flex items-center px-[10px] py-2 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(4, 116, 144, 0.5) 0%, rgba(0, 163, 133, 0.5) 100%)",
                    }}
                  >
                    <Plus size={16} className="mr-2" />
                    Add Vendor
                  </button>
                  <button
                    className="flex items-center px-4 py-2 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(4, 116, 144, 0.5) 0%, rgba(0, 163, 133, 0.5) 100%)",
                    }}
                  >
                    <Plus size={16} className="mr-2" />
                    Add Work Order
                  </button>
                </div>
              </div>
            </div>

            <DashboardCards />
            <DataTable />
          </div>
        </main>
      </div>
      
      <AddVendorSidebar 
        isOpen={addVendorOpen} 
        onClose={() => setAddVendorOpen(false)} 
      />
    </div>
  );
}
