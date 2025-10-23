"use client"
import LoginForm from '@/components/ui/LoginForm';
import { Suspense } from 'react';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <div className="relative mx-auto flex w-full max-w-[500px] flex-col">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}