"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface AddVendorSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddVendorSidebar({
  isOpen,
  onClose,
}: AddVendorSidebarProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    serviceAreas: "",
    serviceType: "",
    email: "",
    phone: "",
    website: "",
    notes: "",
  });

  const [errors, setErrors] = useState({ companyName: "" });
  const [isRecommendedChecked, setIsRecommendedChecked] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "companyName" && value.trim()) {
      setErrors((prev) => ({ ...prev, companyName: "" }));
    }
  };

  const handleSubmit = () => {
    if (!formData.companyName.trim()) {
      setErrors({ companyName: "Company name is required" });
      return;
    }
    // Submit logic here
    console.log("Form submitted:", formData);
  };

  // Prevent background scroll when sidebar is open
  if (typeof document !== "undefined") {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{
            backgroundColor: "rgba(100, 100, 100, 0.25)",
            backdropFilter: "blur(10px)",
          }}
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 transform transition-transform duration-300 ease-in-out overflow-hidden w-[670px] h-screen bg-sidebar-bg border border-border-primary rounded-tl-[36px] rounded-bl-[36px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto pt-4 pr-7 pb-4 pl-7"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white text-xl font-semibold">Add Vendor</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="bg-card-bg p-2 rounded-xl">
            {/* Description */}
            <p className="text-gray-400 text-sm mb-4">
              Let HUDII extract vendor details automatically, or enter them
              manually below.
            </p>

            {/* Parse Input Section */}
            <div className="mb-4">
              <div className="rounded-lg p-4 mb-4 bg-card-secondary">
                <p className="text-gray-400 text-sm mb-3 w-full bg-transparent border-none appearance-none focus:border-none">
                  Try: "Add ABC Plumbing in Austin, call John at 512-555-1234"
                  or paste their Google/Yelp page URL, or upload a screenshot
                </p>
                <div className="flex items-center justify-end gap-4">
                  <button className="text-gray-400 hover:text-white">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H6.99C4.24 7 2 9.24 2 12s2.24 5 4.99 5H11v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm5-6h4.01c2.75 0 4.99 2.25 4.99 5s-2.24 5-4.99 5H13v1.9h4c2.76 0 5-2.25 5-5s-2.24-5-5-5h-4v1.9z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                  </button>
                  <button
                    className="px-4 py-2 text-white rounded-lg"
                    style={{
                      background:
                        "linear-gradient(94.56deg, #515050 2.68%, #383838 99.74%)",
                      border: "1px solid transparent",
                      borderRadius: "12px",
                      backgroundImage:
                        "linear-gradient(90deg, #191919 0%, #1E1E1E 100%), linear-gradient(180deg, #00AEDC 0%, #19C8A7 100%)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }}
                  >
                    Parse Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 italic font-urbanist text-sm font-normal text-white">
              or Enter Manually
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Contact Details Section */}
            <div>
              <h3 className="text-white text-lg font-medium mb-4">
                Contact Details
              </h3>

              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white text-sm mb-2 font-poppins">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="w-full bg-transparent text-white border-0 border-b border-gray-600 pb-2 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2 font-poppins">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="w-full bg-transparent text-white border-0 border-b border-gray-600 pb-2 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="mb-4">
                <label className="block text-white text-sm mb-2 font-poppins">
                  Company Name*
                </label>
                <input
                  type="text"
                  placeholder="e.g. HUDII"
                  value={formData.companyName}
                  onChange={(e) =>
                    handleInputChange("companyName", e.target.value)
                  }
                  className={`w-full bg-transparent text-white border-0 border-b pb-2 focus:outline-none ${
                    errors.companyName ? "border-red-500" : "border-gray-600 focus:border-teal-500"
                  }`}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
                )}
              </div>

              {/* Service Areas */}
              <div className="mb-4">
                <label className="block text-white text-sm mb-2 font-poppins">
                  Service Areas
                </label>
                <select
                  value={formData.serviceAreas}
                  onChange={(e) =>
                    handleInputChange("serviceAreas", e.target.value)
                  }
                  className="w-[614px] h-11 rounded-lg py-[13px] px-3 bg-input-bg text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                  style={{
                    borderBottom: "0.5px solid #252525",
                  }}
                >
                  <option value="" className="text-black">Add service area...</option>
                  <option value="austin" className="text-black">Austin, TX</option>
                  <option value="dallas" className="text-black">Dallas, TX</option>
                  <option value="houston" className="text-black">Houston, TX</option>
                </select>
                <span className="text-text-muted text-xs">
                  e.g. HVAC, Plumbing, Electrical, Landscaping
                </span>
              </div>

              {/* Service Type */}
              <div className="mb-4">
                <label className="block text-white text-sm mb-2 font-poppins">
                  Service Type
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) =>
                    handleInputChange("serviceType", e.target.value)
                  }
                  className="w-[614px] h-11 rounded-lg py-[13px] px-3 bg-input-bg text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                  style={{
                    borderBottom: "0.5px solid #252525",
                  }}
                >
                  <option value="" className="text-black">Add service area...</option>
                  <option value="hvac" className="text-black">HVAC</option>
                  <option value="plumbing" className="text-black">Plumbing</option>
                  <option value="electrical" className="text-black">Electrical</option>
                  <option value="landscaping" className="text-black">Landscaping</option>
                </select>
                <span className="text-text-muted text-xs">
                  Type and press Enter or comma. e.g. Austin, TX or United
                  States
                </span>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white text-sm mb-2 font-poppins">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="contact@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-transparent text-white border-0 border-b border-gray-600 pb-2 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2 font-poppins">
                    Primary Phone
                  </label>
                  <div className="flex gap-4">
                    <select
                      name=""
                      id=""
                      className="w-full max-w-14 bg-transparent text-white border-0 border-b border-gray-600 pb-2 focus:outline-none focus:border-teal-500"
                    >
                      <option value="+1" className="text-black">+1</option>
                      <option value="+1" className="text-black">+91</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Type phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full bg-transparent text-white border-0 border-b border-gray-600 pb-2 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="mb-4">
                <label className="block text-white text-sm mb-2 font-poppins">
                  Website
                </label>
                <input
                  type="url"
                  placeholder="https://"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  className="w-full bg-transparent text-white border-0 border-b border-gray-600 pb-2 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="flex gap-2 mb-4 items-center">
                <input
                  type="checkbox"
                  checked={isRecommendedChecked}
                  onChange={(e) => setIsRecommendedChecked(e.target.checked)}
                  className="gradient-checkbox"
                />
                <span className="font-urbanist text-text-error text-sm font-normal">
                  RECOMMENDED: Have HUDII to reach out to vendor for compliance
                  information
                </span>
              </div>

              {/* Internal Notes */}
              <div className="mb-8">
                <label className="block text-white text-sm mb-2 font-poppins">
                  Internal Notes
                </label>
                <textarea
                  placeholder="e.g. 'Excellent vendor. Preferred for all plumbing needs.'"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  rows={4}
                  className="w-full bg-transparent text-white border border-border-secondary rounded-2xl px-[15px] py-3 focus:outline-none focus:border-teal-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!isRecommendedChecked}
                className={`w-full py-3 text-white rounded-lg transition-colors font-medium ${
                  isRecommendedChecked ? "hover:bg-teal-700" : "cursor-not-allowed opacity-50"
                }`}
                style={{
                  background: isRecommendedChecked
                    ? "linear-gradient(180deg, rgba(4, 116, 144, 0.5) 0%, rgba(0, 163, 133, 0.5) 100%)"
                    : "#666666",
                }}
              >
                Looks Good
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
