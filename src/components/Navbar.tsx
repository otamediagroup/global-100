'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-dark border-b border-navy/50 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="https://cdn.prod.website-files.com/69889742baae82d9f9911b3b/69de03dbd3fc7cf8da2de059_Global%20100%20Logo%20Transparent.png"
              alt="Global 100"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-gold transition-colors">
              Rankings
            </Link>
            <Link href="/methodology" className="text-gray-300 hover:text-gold transition-colors">
              Methodology
            </Link>
            <a
              href="https://fifty.otamediagroup.com"
              className="text-gray-300 hover:text-gold transition-colors"
            >
              The Fifty
            </a>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="https://index.otamediagroup.com"
              className="px-6 py-2 bg-gold text-dark font-semibold rounded hover:bg-opacity-90 transition-all"
            >
              Leadership Index
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-navy transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-navy">
            <Link
              href="/"
              className="block text-gray-300 hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Rankings
            </Link>
            <Link
              href="/methodology"
              className="block text-gray-300 hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Methodology
            </Link>
            <a
              href="https://fifty.otamediagroup.com"
              className="block text-gray-300 hover:text-gold transition-colors py-2"
            >
              The Fifty
            </a>
            <div className="pt-4">
              <a
                href="https://index.otamediagroup.com"
                className="block px-6 py-2 bg-gold text-dark font-semibold rounded hover:bg-opacity-90 transition-all text-center"
              >
                Leadership Index
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
