import React from 'react';
import NavMenu from '@/components/navigation/navMenu';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <NavMenu/>
      <main className="flex-1 overflow-y-auto bg-white">
        {children}
      </main>
    </div>    
  );
}
