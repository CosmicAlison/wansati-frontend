import React from 'react';
import CustomNavMenu from '@/components/navigation/navMenu';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <CustomNavMenu/>
      <main className="flex-1 md:ml-45 overflow-y-auto bg-white">
        {children}
      </main>
    </div>    
  );
}
