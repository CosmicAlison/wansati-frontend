
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import navItems from '@/constants/navItems';


export default function NavMenu() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);  
  return(
    <div className="min-h-screen">
      <button
          className="md:hidden absolute top-4 left-4 z-50 p-2 border-1 border-[var(--dark-purple)] text-[var(--dark-purple)] rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
      </button>
      <aside className={`
          fixed z-40 md:static md:flex flex-col items-center h-100vh
          w-45 bg-white border-r border-[var(--light-grey)] text-black p-4
          transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        `}>
        <Image src="/logo_color.png" alt="Logo" width={70} height={70} className="block mx-auto" />

        <nav className="w-full mt-6 flex flex-col items-center space-y-4">
          {navItems.map(({ name, href, icon: Icon}) => {
            const isActive = pathname === href;

            const baseClass =
              'w-full text-center px-4 py-2 rounded-md transition';
            const activeClass = 'bg-[var(--secondary-bg)] text-[var(--dark-purple)]';
            const inactiveClass = 'text-gray-700 hover:bg-[var(--lilac)]';

            return (
              <Link
                key={name}
                href={href}
                className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
              >
                <div className="flex items-center">
                  <Icon className="w-5 h-5 inline text-[var(--light-grey)]"/>
                  <span className='ml-5'>{name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>    
)
}


