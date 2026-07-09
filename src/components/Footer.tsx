"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-on-background text-on-primary">


      {/* Main Footer Links */}
      <div className="max-w-container-max mx-auto py-24 px-6 md:px-margin-page grid grid-cols-12 gap-gutter items-start">
        <div className="col-span-12 md:col-span-6 flex flex-col gap-8 md:pr-12">
          <span className="text-headline-md font-headline-md text-surface tracking-tighter">
            Abhinav Singh
          </span>
          <div>
            <p className="text-body-md font-bold text-surface mb-2">
              Business Consultant • Product Strategy • Business Analysis • Digital Transformation
            </p>
            <p className="text-body-md text-surface-variant max-w-sm leading-relaxed">
              Helping organizations transform complex operations into scalable digital products through structured analysis, AI-assisted development, and cross-functional collaboration.
            </p>
          </div>
          <p className="text-label-caps text-surface-variant/60 tracking-widest mt-12">
            © 2026 ABHINAV SINGH. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col gap-8">
          <span className="text-label-caps text-on-tertiary-container tracking-[0.2em]">
            DIRECTORY
          </span>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-body-md text-surface-variant hover:text-surface transition-colors">
              Home
            </Link>
            <Link href="/contact" className="text-body-md text-surface-variant hover:text-surface transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col gap-8">
          <span className="text-label-caps text-on-tertiary-container tracking-[0.2em]">
            CONNECT
          </span>
          <nav className="flex flex-col gap-4">
            <Link href="https://www.linkedin.com/in/abhinav-singh1508/" target="_blank" rel="noopener noreferrer" className="text-body-md text-surface-variant hover:text-surface transition-colors">
              LinkedIn
            </Link>
            <Link href="https://github.com/abhinav1508" target="_blank" rel="noopener noreferrer" className="text-body-md text-surface-variant hover:text-surface transition-colors">
              GitHub
            </Link>
            <Link href="mailto:abhinavs1508@gmail.com" className="text-body-md text-surface-variant hover:text-surface transition-colors">
              Email
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
