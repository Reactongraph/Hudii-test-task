"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Grid3X3,
  List,
  Edit,
  MoreHorizontal,
  Star,
  ArrowUpDown,
} from "lucide-react";

const tableData = [
  {
    id: 1,
    vendor: "AirRight Cooling",
    email: "maintenance@airright.com",
    service: "HVAC",
    category: "Landscaping",
    location: "Los Angeles",
    compliance: "NDA missing",
    orders: 3,
    cities: "Dallas, San Antonio, Los Angeles, New York City",
    rating: 4.5,
    tags: "Used Last",
    lastUsed: "21 Oct, 2024",
    status: "Used Last",
  },
  {
    id: 2,
    vendor: "AirRight Cooling 1268",
    email: "maintenance@airright.com",
    service: "HVAC",
    category: "Landscaping",
    location: "Los Angeles",
    compliance: "COI Missing, NDA missing",
    orders: 3,
    cities: "Dallas, San Antonio, Los Angeles, New York City",
    rating: 3,
    tags: "Used Last",
    lastUsed: "21 Oct, 2024",
    status: "Used Last",
  },
  {
    id: 3,
    vendor: "AirRight Cooling",
    email: "maintenance@airright.com",
    service: "HVAC",
    category: "Landscaping",
    location: "Los Angeles",
    compliance: "Missing Info",
    orders: 3,
    cities: "Dallas, San Antonio, Los Angeles, New York City",
    rating: 0,
    tags: "New Vendor",
    lastUsed: "21 Oct, 2024",
    status: "New Vendor",
  },
  {
    id: 4,
    vendor: "AirRight Cooling",
    email: "maintenance@airright.com",
    service: "HVAC",
    category: "Landscaping",
    location: "Los Angeles",
    compliance: "COI Missing, NDA missing",
    orders: 3,
    cities: "Dallas, San Antonio, Los Angeles, New York City",
    rating: 3,
    tags: "Used Last",
    lastUsed: "21 Oct, 2024",
    status: "Used Last",
  },
  {
    id: 5,
    vendor: "AirRight Cooling",
    email: "maintenance@airright.com",
    service: "HVAC",
    category: "Landscaping",
    location: "Los Angeles",
    compliance: "COI Missing, NDA missing",
    orders: 3,
    cities: "Dallas, San Antonio, Los Angeles, New York City",
    rating: 3,
    tags: "Used Last",
    lastUsed: "21 Oct, 2024",
    status: "Used Last",
  },
];

export default function DataTable() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const columns = "40px 1.5fr 1fr 1fr 0.6fr 1.5fr 0.6fr 1fr 1fr 60px";

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(tableData.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleRowSelect = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  const getComplianceColor = (compliance: string) => {
    if (compliance.includes("COI Missing"))
      return "bg-[#FF554C0D] text-[#FF554C] border-[#FF554C]";
    if (compliance.includes("NDA missing"))
      return "bg-[##FFA808] text-[#FFA808] border-[#FFA808]";
    if (compliance.includes("Missing Info"))
      return "bg-[#C94CFF0D] text-[#C94CFF] border-[#C94CFF]";
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  const filteredData = tableData.filter(item =>
    item.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="max-w-[453px]">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for tasks, invoices, vendors and more"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-text-primary rounded-[40px] border-0 focus:outline-none font-urbanist font-normal placeholder:text-text-primary leading-[140%] w-[452px] h-[51px] pl-12 pr-4 py-[11px]"
              style={{
                boxShadow: "0px 0px 10px 0px #A3A3A326 inset",
                background: "#FFFFFF0D",
                border: "1px solid #1B1C22",
              }}
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div
            className="flex bg-sidebar-bg px-2 py-2 rounded-xl gap-2"
            style={{
              boxShadow: "0px 0px 4px 0px #00000040 inset",
            }}
          >
            <button className="flex items-center text-gray-300 font-urbanist">
              <Grid3X3 size={16} className="mr-2" />
              Grid View
            </button>
            <button>
              <div
                className="flex items-center px-4 py-1 text-white rounded-lg font-urbanist"
                style={{
                  background:
                    "linear-gradient(94.56deg, #515050 2.68%, #383838 99.74%)",
                }}
              >
                <List size={16} className="mr-2" />
                List View
              </div>
            </button>
          </div>
          <button className="flex items-center px-4 py-2 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 bg-input-bg">
            <Filter size={16} className="mr-2" />
            Filter
          </button>
        </div>
      </div>
      <div
        className="rounded-3xl shadow-sm p-4 bg-sidebar-bg"
      >
        <div>
          <div
            className="grid gap-4 px-6 py-3 rounded-xl mb-3 bg-card-secondary"
            style={{
              gridTemplateColumns: columns,
            }}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="gradient-checkbox"
              />
            </div>
            <div className="font-urbanist text-white items-center flex tracking-wider justify-between text-[13px] leading-[14px] font-normal">
              Vendor
              <ArrowUpDown size={12} className="text-gray-400" />
            </div>
            <div className="font-urbanist text-white items-center flex tracking-wider justify-between text-[13px] leading-[14px] font-normal">
              Services
              <ArrowUpDown size={12} className="text-gray-400" />
            </div>
            <div className="font-urbanist text-white items-center flex tracking-wider justify-between text-[13px] leading-[14px] font-normal">
              Compliance
              <ArrowUpDown size={12} className="text-gray-400" />
            </div>
            <div className="font-urbanist text-white items-center flex tracking-wider justify-between text-[13px] leading-[14px] font-normal">
              Orders
              <ArrowUpDown size={12} className="text-gray-400" />
            </div>
            <div className="font-urbanist text-white items-center flex tracking-wider justify-between text-[13px] leading-[14px] font-normal">
              Cities
              <ArrowUpDown size={12} className="text-gray-400" />
            </div>
            <div className="font-urbanist text-white items-center flex tracking-wider justify-between text-[13px] leading-[14px] font-normal">
              Rating
              <ArrowUpDown size={12} className="text-gray-400" />
            </div>
            <div className="font-urbanist text-white items-center flex tracking-wider justify-between text-[13px] leading-[14px] font-normal">
              Tags
              <ArrowUpDown size={12} className="text-gray-400" />
            </div>
            <div className="font-urbanist text-white items-center flex tracking-wider justify-between text-[13px] leading-[14px] font-normal">
              Last Date Used
              <ArrowUpDown size={12} className="text-gray-400" />
            </div>
            <div className="font-urbanist text-white items-center flex tracking-wider text-[13px] leading-[14px] font-normal">
              Actions
            </div>
          </div>

          <div className="space-y-3">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className={`grid gap-4 px-6 py-4 rounded-xl h-[107px] ${
                  selectedRows.includes(item.id) ? "border-2" : ""
                }`}
                style={{
                  boxShadow:
                    "0px 2px 3px 0px #0000004D, 0px 6px 10px 4px #00000026",
                  gridTemplateColumns: columns,
                  ...(selectedRows.includes(item.id)
                    ? {
                        border: "1px solid transparent",
                        borderRadius: "12px",
                        background:
                          "linear-gradient(90deg, #191919 0%, #1E1E1E 100%), linear-gradient(180deg, #00AEDC 0%, #19C8A7 100%)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                      }
                    : {
                        border: "1px solid #252525",
                        borderRadius: "12px",
                      }),
                }}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleRowSelect(item.id)}
                    className="gradient-checkbox"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-sm font-medium text-white">
                    {item.vendor}
                  </div>
                  <div className="text-sm text-gray-400">{item.email}</div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-sm text-white">{item.service}</div>
                  <div className="text-sm text-gray-400">{item.category}</div>
                  <div className="text-sm text-gray-400">{item.location}</div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex flex-wrap gap-1">
                    {item.compliance.split(", ").map((comp, idx) => (
                      <span
                        key={idx}
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getComplianceColor(
                          comp
                        )}`}
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center text-sm text-white">
                  {item.orders}
                </div>
                <div className="flex items-center">
                  <div className="text-sm text-white">{item.cities}</div>
                </div>
                <div className="flex items-center">
                  {item.rating > 0 ? (
                    renderStars(item.rating)
                  ) : (
                    <span className="text-sm text-gray-400">No Reviews</span>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-tag-bg text-white border border-white">
                    {item.tags}
                  </span>
                </div>
                <div className="flex items-center text-sm text-white">
                  {item.lastUsed}
                </div>
                <div className="flex flex-col justify-between space-y-2">
                  <button className="p-1 text-gray-400 hover:text-gray-200">
                    <Edit size={20} />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-200">
                    <MoreHorizontal size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
