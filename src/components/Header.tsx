"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-300 bg-surface/90 backdrop-blur-md border-b border-outline-variant ${
          scrolled ? "py-2 shadow-sm" : "py-6"
        }`}
      >
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-headline-sm font-headline-sm font-bold tracking-tighter text-primary flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-full" />
            Abhinav Singh
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-label-caps font-label-caps tracking-widest transition-colors ${
                  isActive
                    ? "text-on-tertiary-container border-b-2 border-on-tertiary-container pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="hidden md:block">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-10 py-4 text-label-caps font-label-caps hover:opacity-90 transition-all duration-300 tracking-widest text-center">
            RESUME
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-primary transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center pt-20 px-6"
          >
            <nav className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-headline-sm font-headline-sm tracking-widest transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a 
                href="/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-8 w-full max-w-xs bg-primary text-on-primary px-10 py-4 text-label-caps font-label-caps hover:opacity-90 transition-all duration-300 tracking-widest text-center"
              >
                RESUME
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
