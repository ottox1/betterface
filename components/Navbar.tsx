'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-fog/80 backdrop-blur-md border-b border-stone">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-medium tracking-tight text-slate">
            Grade Zero
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm text-slate/70 hover:text-slate transition-colors">
              Work
            </a>
            <a href="#pricing" className="text-sm text-slate/70 hover:text-slate transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-slate/70 hover:text-slate transition-colors">
              FAQ
            </a>
            <a
              href="#"
              className="px-5 py-2.5 bg-sage text-white text-sm font-medium rounded-full hover:bg-sage-dark transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <a
              href="#work"
              className="block text-sm text-slate/70 hover:text-slate transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Work
            </a>
            <a
              href="#pricing"
              className="block text-sm text-slate/70 hover:text-slate transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="block text-sm text-slate/70 hover:text-slate transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#"
              className="inline-block px-5 py-2.5 bg-sage text-white text-sm font-medium rounded-full hover:bg-sage-dark transition-colors"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
