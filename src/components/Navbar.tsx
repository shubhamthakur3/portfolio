"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#extras", label: "Extras" },
  { href: "#media", label: "Media" },
];

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when contact is open
  useEffect(() => {
    if (contactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [contactOpen]);

  return (
    <>
      {/* Green accent bar at the very top */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-accent z-[60]" />

      {/* Main Navbar */}
      <header
        className={`fixed top-2 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-accent shadow-lg" : "bg-background"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-black tracking-tight text-foreground border-3 border-foreground rounded-lg px-3 py-1 hover:bg-foreground hover:text-background transition-all duration-200"
            aria-label="Shubham Thakur - Home"
          >
            ST
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="magic-underline text-lg font-extrabold tracking-tight text-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Me Button */}
          <button
            onClick={() => setContactOpen(true)}
            className="font-display text-lg font-extrabold tracking-tight text-foreground border-3 border-foreground rounded-lg px-5 py-2 hover:bg-foreground hover:text-background transition-all duration-200 cursor-pointer"
          >
            Contact Me
          </button>
        </nav>
      </header>

      {/* Contact Slide-Up Pane */}
      {contactOpen && (
        <div className="fixed inset-0 z-[70] flex items-end">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setContactOpen(false)}
          />

          {/* Contact Panel */}
          <div className="relative w-full max-h-[85vh] overflow-y-auto bg-navy border-t-4 border-accent rounded-t-2xl animate-slide-up">
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-10 md:py-14">
              {/* Close Button */}
              <button
                onClick={() => setContactOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 hover:border-accent hover:text-accent transition-colors duration-200 cursor-pointer"
                aria-label="Close contact form"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="text-center mb-10">
                <div className="text-5xl mb-4">✉️</div>
                <h2 className="font-display text-3xl md:text-4xl font-black text-white">
                  Contact Me
                </h2>
              </div>

              {/* Form */}
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-foreground font-medium text-sm border-0 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-foreground font-medium text-sm border-0 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Your Message</label>
                  <textarea
                    placeholder="Enter your message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-foreground font-medium text-sm border-0 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-accent text-navy font-extrabold text-lg hover:bg-accent-light transition-colors duration-200 cursor-pointer"
                >
                  Send Message 🚀
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
