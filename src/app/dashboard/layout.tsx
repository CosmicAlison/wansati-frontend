import React from 'react';
import CustomNavMenu from '@/components/navigation/navMenu';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CustomNavMenu/>
      <main className="flex-1 overflow-y-auto bg-white">
        {children}
      </main>
    </div>    
  );
}
