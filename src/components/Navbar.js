"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menu = [
  { label: "Home", href: "/" },
  { label: "Profil Sekolah", href: "/about" },
  { label: "Berita", href: "/berita" },
  { label: "Ekstrakurikuler", href: "/ekstrakurikuler" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ocean-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo + nama sekolah */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo SMA Negeri 1 Bawang"
            width={40}
            height={44}
            priority
          />
          <div className="leading-tight">
            <p className="text-sm font-bold text-ocean-900 sm:text-base">
              SMA Negeri 1 Bawang
            </p>
            <p className="text-xs text-ocean-700">Ompitis, Kreatif, Elegan</p>
          </div>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-8 md:flex">
            {menu.map((item) => (
                <li key={item.href}>
                <Link
                    href={item.href}
                    className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                    isActive(item.href)
                        ? "border-ocean-700 font-bold text-ocean-700"
                        : "border-transparent text-ocean-900 hover:border-ocean-300 hover:text-ocean-700"
                    }`}
                >
                    {item.label}
                </Link>
                </li>
            ))}
        </ul>

        {/* Tombol menu mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-ocean-900 hover:bg-ocean-100 md:hidden"
          aria-label="Buka menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <ul className="border-t border-ocean-100 px-4 pb-3 md:hidden">
          {menu.map((item) => (
            <li key={item.href}>
                <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block border-l-4 px-3 py-2 text-sm font-medium ${
                        isActive(item.href)
                        ? "border-ocean-700 font-bold text-ocean-700"
                        : "border-transparent text-ocean-900 hover:bg-ocean-100"
                    }`}
                    >
                    {item.label}
                </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}