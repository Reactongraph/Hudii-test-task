'use client';

import { useState } from 'react';
import { 
  LayoutGrid, 
  Calendar, 
  CheckSquare, 
  Home, 
  Users, 
  Truck, 
  FileText, 
  BarChart3, 
  CreditCard, 
  LogOut,
  Menu
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutGrid, label: 'Dashboard', active: false },
  { icon: Calendar, label: 'Calendar', active: false },
  { icon: CheckSquare, label: 'Tasks', active: false },
  { icon: Home, label: 'Properties', active: false },
  { icon: Users, label: 'Vendors', active: true },
  { icon: Truck, label: 'Logistics', active: false },
  { icon: FileText, label: 'Documents', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: CreditCard, label: 'Payments', active: false },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  return (
    <div className={`text-white transition-all duration-300 ease-in-out h-screen flex flex-col fixed left-0 top-0 z-10 border-r border-border-secondary bg-sidebar-bg`} style={{width: isCollapsed ? '107px' : '300px'}}>
      <div className="p-4">
        <button onClick={onToggle} className={`p-2 hover:bg-gray-800 rounded w-full flex ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
          <Menu size={24} />
        </button>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center p-3 rounded-lg transition-colors ${isCollapsed ? 'justify-center' : ''} ${
                  item.active 
                    ? 'bg-accent-teal-light text-accent-teal' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <item.icon size={24} />
                {!isCollapsed && <span className="ml-3">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <button className={`flex items-center p-3 text-gray-300 hover:bg-gray-800 rounded-lg w-full ${isCollapsed ? 'justify-center' : ''}`}>
          <LogOut size={24} />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
}