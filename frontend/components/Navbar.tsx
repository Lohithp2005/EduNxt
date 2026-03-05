'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: `/` },
    { name: "For Kids", href: `/child` },
    { name: "For Parents", href: `/parent` },
    { name: "Pricing", href: `/pricing` },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;


    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">

      {/* Logo */}
      <Link href={`/`} className="text-purple-600">
        <h2 className="text-2xl font-bold">EduNXT</h2>
      </Link>

      {/* Desktop menu */}
      <ul className="md:flex hidden items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-gray-500/80 transition ${
                isActive(link.href)
                  ? 'underline underline-offset-4 decoration-purple-600'
                  : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop actions */}
      <div className="md:flex hidden items-center gap-3">

        {/* Watch demo button */}
        <button className="hidden bg-white text-purple-600 border border-purple-300 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full">
          Watch Demo
        </button>

      </div>

      {/* Mobile menu button */}
      <button
        aria-label="menu-btn"
        onClick={() => setOpen(!open)}
        className="inline-block md:hidden active:scale-90 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[70px] left-0 w-full bg-white pb-2 md:hidden flex flex-col items-center border-b border-purple-500 rounded-b-2xl">
          <ul className="flex flex-col space-y-4 text-lg text-purple-600 items-center w-full">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm ${
                    isActive(link.href)
                      ? 'underline underline-offset-4 decoration-purple-600'
                      : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}