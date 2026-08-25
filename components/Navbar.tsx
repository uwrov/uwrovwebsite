"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { href: "/meet-the-team", label: "Meet the Team" },
  { href: "/competition", label: "The Competition" },
  { href: "/rovs", label: "ROVs" },
  { href: "/floats", label: "Floats" },
  { href: "/outreach-and-sponsorship", label: "Sponsorship" },
  { href: "/contact", label: "Contact Us" }
];

const subteamLinks = [
  { href: "/areas-of-interest/mechanical", label: "Mechanical" },
  { href: "/areas-of-interest/electrical", label: "Electrical" },
  { href: "/areas-of-interest/software", label: "Software" },
  { href: "/areas-of-interest/business", label: "Business" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [subteamsOpen, setSubteamsOpen] = useState(false);
  const [mobileSubteamsOpen, setMobileSubteamsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSubteamsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4b2e83] border-b border-[#3a2266]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="UWROV Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href={navLinks[0].href}
              className="text-base text-purple-200 hover:text-white transition-colors duration-200 font-medium"
            >
              {navLinks[0].label}
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSubteamsOpen((o) => !o)}
                className="flex items-center gap-1 text-base text-purple-200 hover:text-white transition-colors duration-200 font-medium"
              >
                Areas of Interest
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    subteamsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {subteamsOpen && (
                <div className="absolute left-0 mt-3 w-44 bg-[#3a2266] border border-[#2d1a52] shadow-lg py-1">
                  {subteamLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setSubteamsOpen(false)}
                      className="block px-4 py-2 text-base text-purple-200 hover:text-white hover:bg-[#4b2e83] font-medium transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-base text-purple-200 hover:text-white transition-colors duration-200 font-medium"
              >
                {l.label}
              </Link>
            ))}

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe7Hrpp_nH02SkSalhhOX88CfFylBclX1ZYPnaRywgFxi2-PA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-semibold text-sm px-4 py-2 hover:bg-gray-900 transition-colors"
            >
              Apply Now
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-purple-200 hover:text-white p-2" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#3a2266] border-t border-[#2d1a52] px-4 py-4 flex flex-col gap-3">
          <Link
            href={navLinks[0].href}
            onClick={() => setOpen(false)}
            className="text-purple-200 hover:text-white py-2 text-base font-medium transition-colors"
          >
            {navLinks[0].label}
          </Link>

          <div>
            <button
              onClick={() => setMobileSubteamsOpen((o) => !o)}
              className="w-full flex items-center justify-between text-purple-200 hover:text-white py-2 text-base font-medium transition-colors"
            >
              Areas of Interest
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileSubteamsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileSubteamsOpen && (
              <div className="pl-4 flex flex-col gap-1 border-l border-purple-500/30 ml-1">
                {subteamLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => {
                      setOpen(false);
                      setMobileSubteamsOpen(false);
                    }}
                    className="text-purple-300 hover:text-white py-1.5 text-base font-medium transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-purple-200 hover:text-white py-2 text-base font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe82YhpZVW22KgC2KjTKcbZlaZlW_83nLEyGWaAmY9JyK_N-g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white font-semibold text-sm px-4 py-2 text-center mt-2 hover:bg-gray-900 transition-colors"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}