"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, User, Star } from "lucide-react"
import { NotificationDropdown } from "@/components/notification-system"

// Mock user data - in real app this would come from your backend/context
const currentUser = {
  level: 12,
  xp: 1850,
  xpToNextLevel: 2400,
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-accent-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Level */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/gametable-logo.png" alt="GameTable" width={32} height={32} className="w-8 h-8" />
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-accent-gold" />
              <span className="font-heading text-accent-gold font-semibold">Level {currentUser.level}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/collection" className="font-body text-accent-gold/80 hover:text-accent-gold transition-colors">
              Collection
            </Link>
            <Link
              href="/discover-page"
              className="font-body text-accent-gold/80 hover:text-accent-gold transition-colors"
            >
              Discover
            </Link>
            <Link
              href="/events-page"
              className="font-body text-accent-gold/80 hover:text-accent-gold transition-colors"
            >
              Events
            </Link>
            <Link
              href="/themes-page"
              className="font-body text-accent-gold/80 hover:text-accent-gold transition-colors"
            >
              Themes
            </Link>
            <Link
              href="/messaging-page"
              className="font-body text-accent-gold/80 hover:text-accent-gold transition-colors"
            >
              Messages
            </Link>
            <Link
              href="/trophies-page"
              className="font-body text-accent-gold/80 hover:text-accent-gold transition-colors"
            >
              Trophies
            </Link>
            <Link
              href="/contact-page"
              className="font-body text-accent-gold/80 hover:text-accent-gold transition-colors"
            >
              Contact
            </Link>

            {/* User Actions */}
            <div className="flex items-center space-x-2">
              <NotificationDropdown />
              <Link
                href="/profile"
                className="p-2 rounded-full text-accent-gold hover:text-accent-gold/80 hover:bg-accent-gold/10 transition-colors"
                title="Profile"
              >
                <User className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <NotificationDropdown />
            <Link
              href="/profile"
              className="p-2 rounded-full text-accent-gold hover:text-accent-gold/80 hover:bg-accent-gold/10 transition-colors"
              title="Profile"
            >
              <User className="h-5 w-5" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-accent-gold hover:text-accent-gold/80 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/collection"
              className="block font-body text-accent-gold/80 hover:text-accent-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </Link>
            <Link
              href="/discover-page"
              className="block font-body text-accent-gold/80 hover:text-accent-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Discover
            </Link>
            <Link
              href="/events-page"
              className="block font-body text-accent-gold/80 hover:text-accent-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/themes-page"
              className="block font-body text-accent-gold/80 hover:text-accent-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Themes
            </Link>
            <Link
              href="/messaging-page"
              className="block font-body text-accent-gold/80 hover:text-accent-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Messages
            </Link>
            <Link
              href="/trophies-page"
              className="block font-body text-accent-gold/80 hover:text-accent-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Trophies
            </Link>
            <Link
              href="/contact-page"
              className="block font-body text-accent-gold/80 hover:text-accent-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
