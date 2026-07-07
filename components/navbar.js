"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-transparent sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between py-5 px-6 sm:px-12 lg:max-w-[75rem] xl:max-w-[85rem] 2xl:max-w-[100rem] mx-auto">
        <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
          Alya
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white text-sm no-underline duration-300 hover:text-[#16f2b3]"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="text-sm font-medium text-white rounded-full border border-[#16f2b3] px-4 py-2 duration-300 hover:bg-[#16f2b3] hover:text-[#0d1224]"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-[#0d1224]/95">
          {[...links, { name: "Contact", href: "#contact" }].map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white text-sm no-underline duration-300 hover:text-[#16f2b3]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
