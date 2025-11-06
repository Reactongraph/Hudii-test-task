"use client";

import { Play, FileText, CheckCircle, AlertTriangle } from "lucide-react";

const cardData = [
  {
    title: "Open Work Orders",
    value: "28",
    subtitle: "+2 Emergency",
    icon: Play,
    radialGradient: "rgba(255, 231, 109, 0.3)",
  },
  {
    title: "Outstanding Vendor Invoices",
    value: "4",
    subtitle: "+5 Overdue",
    icon: FileText,
    radialGradient: "rgba(179, 231, 58, 0.3)",
  },
  {
    title: "Vendor Approvals Needed",
    value: "3",
    subtitle: "+1 Urgent",
    icon: CheckCircle,
    radialGradient: "rgba(25, 200, 167, 0.3)",
  },
  {
    title: "Vendors Out of Compliance",
    value: "32",
    subtitle: "+2 Urgent",
    icon: AlertTriangle,
    radialGradient: "rgba(255, 45, 85, 0.3)",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] mb-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="p-6 rounded-xl text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #191919 0%, #1E1E1E 100%)",
            border: "1px solid #1B1C22",
            boxShadow: "0px 2px 3px 0px #0000004D, 0px 6px 10px 4px #00000026",
          }}
        >
          <div className="mb-2">
            <h3 className="font-urbanist text-base font-normal">
              {card.title}
            </h3>
          </div>

          <div className="mb-2">
            <span className="font-urbanist text-[30px] font-semibold leading-[30px] tracking-[-0.02em]">{card.value}</span>
          </div>

          <p className="font-poppins text-sm font-normal leading-[14px]">
            <span>{card.subtitle.split(' ')[0]}</span>
            <span style={{color: '#757575'}}> {card.subtitle.split(' ').slice(1).join(' ')}</span>
          </p>

          <div
            className="absolute top-0 right-0 w-full h-full"
            style={{
              background: `radial-gradient(ellipse 320px 200px at 95% 80%, ${card.radialGradient.match(/rgba\([^)]+\)/g)?.[0] || 'rgba(255, 255, 255, 0.1)'} 0%, transparent 60%)`
            }}
          />
          <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
            <card.icon size={45} className="text-white opacity-80" />
          </div>
        </div>
      ))}
    </div>
  );
}
