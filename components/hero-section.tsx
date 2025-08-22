"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dice6, Users, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Custom Manor Background with CSS Art */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/15" />

      {/* Custom CSS Damask Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
          radial-gradient(circle at 25% 25%, hsl(var(--accent-gold)) 2px, transparent 2px),
          radial-gradient(circle at 75% 75%, hsl(var(--accent-copper)) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px, 40px 40px",
        }}
      />

      {/* Ornate Corner Decorations - Pure CSS Art */}
      <div className="absolute top-4 left-4 w-20 h-20">
        <div className="relative w-full h-full">
          {/* Corner flourish using CSS */}
          <div className="absolute top-0 left-0 w-16 h-4 bg-gradient-to-r from-accent-gold to-transparent rounded-full"></div>
          <div className="absolute top-0 left-0 w-4 h-16 bg-gradient-to-b from-accent-gold to-transparent rounded-full"></div>
          <div className="absolute top-2 left-2 w-3 h-3 bg-accent-copper rounded-full"></div>
          <div className="absolute top-1 left-6 w-2 h-2 bg-accent-gold rounded-full"></div>
          <div className="absolute top-6 left-1 w-2 h-2 bg-accent-gold rounded-full"></div>
        </div>
      </div>
      <div className="absolute top-4 right-4 w-20 h-20 transform rotate-90">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-16 h-4 bg-gradient-to-r from-accent-gold to-transparent rounded-full"></div>
          <div className="absolute top-0 left-0 w-4 h-16 bg-gradient-to-b from-accent-gold to-transparent rounded-full"></div>
          <div className="absolute top-2 left-2 w-3 h-3 bg-accent-copper rounded-full"></div>
          <div className="absolute top-1 left-6 w-2 h-2 bg-accent-gold rounded-full"></div>
          <div className="absolute top-6 left-1 w-2 h-2 bg-accent-gold rounded-full"></div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20 transform -rotate-90">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-16 h-4 bg-gradient-to-r from-accent-gold to-transparent rounded-full"></div>
          <div className="absolute top-0 left-0 w-4 h-16 bg-gradient-to-b from-accent-gold to-transparent rounded-full"></div>
          <div className="absolute top-2 left-2 w-3 h-3 bg-accent-copper rounded-full"></div>
          <div className="absolute top-1 left-6 w-2 h-2 bg-accent-gold rounded-full"></div>
          <div className="absolute top-6 left-1 w-2 h-2 bg-accent-gold rounded-full"></div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 w-20 h-20 transform rotate-180">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-16 h-4 bg-gradient-to-r from-accent-gold to-transparent rounded-full"></div>
          <div className="absolute top-0 left-0 w-4 h-16 bg-gradient-to-b from-accent-gold to-transparent rounded-full"></div>
          <div className="absolute top-2 left-2 w-3 h-3 bg-accent-copper rounded-full"></div>
          <div className="absolute top-1 left-6 w-2 h-2 bg-accent-gold rounded-full"></div>
          <div className="absolute top-6 left-1 w-2 h-2 bg-accent-gold rounded-full"></div>
        </div>
      </div>

      {/* Custom CSS Art - Heraldic Banners */}
      <div className="absolute top-20 left-1/4 w-12 h-24 opacity-40">
        <div className="w-full h-20 bg-gradient-to-b from-accent-gold via-accent-copper to-accent-gold relative">
          {/* Banner tail using CSS triangles */}
          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-accent-gold"></div>
          {/* Decorative elements */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent-copper rounded-full"></div>
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-gold rounded-full"></div>
        </div>
      </div>
      <div className="absolute top-20 right-1/4 w-12 h-24 opacity-40">
        <div className="w-full h-20 bg-gradient-to-b from-accent-copper via-accent-gold to-accent-copper relative">
          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-accent-copper"></div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent-gold rounded-full"></div>
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-copper rounded-full"></div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 manor-texture opacity-30" />
      <div className="absolute top-20 left-10 font-charm text-8xl opacity-10 text-accent-gold">♠</div>
      <div className="absolute top-40 right-20 font-charm text-6xl opacity-10 text-accent-copper">♦</div>
      <div className="absolute bottom-20 left-1/4 font-charm text-7xl opacity-10 text-accent-gold">♣</div>
      <div className="absolute bottom-32 right-1/3 font-charm text-5xl opacity-10 text-accent-copper">♥</div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Custom Manor Crest with Inline SVG */}
          <div className="space-y-6">
            <div className="flex justify-center relative">
              {/* Ornate Frame using CSS Art */}
              <div
                className="absolute -inset-16 border-4 border-accent-gold/20 rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, 
                       hsl(var(--accent-gold) / 0.1) 0deg, 
                       hsl(var(--accent-copper) / 0.1) 90deg, 
                       hsl(var(--accent-gold) / 0.1) 180deg, 
                       hsl(var(--accent-copper) / 0.1) 270deg, 
                       hsl(var(--accent-gold) / 0.1) 360deg)`,
                }}
              />

              {/* Custom Manor Crest with Inline SVG */}
              <div className="relative z-10">
                <svg
                  width="160"
                  height="160"
                  viewBox="0 0 160 160"
                  className="drop-shadow-2xl"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Shield background */}
                  <path
                    d="M80 10 L130 40 L130 100 C130 120 110 140 80 150 C50 140 30 120 30 100 L30 40 Z"
                    fill="url(#shieldGradient)"
                    stroke="hsl(var(--accent-gold))"
                    strokeWidth="3"
                  />

                  {/* Crossed swords */}
                  <g stroke="hsl(var(--accent-copper))" strokeWidth="4" fill="hsl(var(--accent-copper))">
                    {/* Sword 1 */}
                    <line x1="50" y1="50" x2="110" y2="110" />
                    <rect x="48" y="48" width="8" height="8" rx="2" />
                    <rect x="106" y="106" width="8" height="8" rx="2" />

                    {/* Sword 2 */}
                    <line x1="110" y1="50" x2="50" y2="110" />
                    <rect x="106" y="48" width="8" height="8" rx="2" />
                    <rect x="48" y="106" width="8" height="8" rx="2" />
                  </g>

                  {/* Crown */}
                  <g fill="hsl(var(--accent-gold))" stroke="hsl(var(--accent-gold))" strokeWidth="2">
                    <path d="M60 30 L70 20 L80 25 L90 20 L100 30 L95 40 L65 40 Z" />
                    <circle cx="70" cy="25" r="2" />
                    <circle cx="80" cy="20" r="3" />
                    <circle cx="90" cy="25" r="2" />
                  </g>

                  {/* Decorative elements */}
                  <circle cx="80" cy="80" r="8" fill="hsl(var(--accent-gold))" opacity="0.8" />
                  <text
                    x="80"
                    y="85"
                    textAnchor="middle"
                    fontSize="12"
                    fill="hsl(var(--accent-gold-foreground))"
                    fontFamily="serif"
                    fontWeight="bold"
                  >
                    GT
                  </text>

                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="50%" stopColor="hsl(var(--secondary))" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Custom Typography with CSS Art Underline */}
            <div className="relative">
              <h1 className="font-heading text-6xl lg:text-8xl font-bold bg-gradient-to-r from-accent-gold via-accent-copper to-accent-gold bg-clip-text text-transparent drop-shadow-lg">
                GameTable
              </h1>
              {/* Custom Decorative Underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-2">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-accent-gold to-transparent relative">
                  <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent-gold rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent-gold rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-accent-copper rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content with Custom Decorative Frame */}
          <div className="relative">
            {/* Custom CSS Art Border */}
            <div
              className="absolute -inset-8 rounded-3xl border-2 border-accent-gold/30"
              style={{
                background: `
                linear-gradient(45deg, hsl(var(--accent-gold) / 0.1) 0px, transparent 2px),
                linear-gradient(-45deg, hsl(var(--accent-copper) / 0.1) 0px, transparent 2px),
                linear-gradient(90deg, hsl(var(--accent-gold) / 0.05) 0%, hsl(var(--accent-copper) / 0.05) 100%)
              `,
                backgroundSize: "20px 20px, 20px 20px, 100% 100%",
              }}
            />

            <div className="space-y-4 relative z-10 p-8">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
                Your Gaming Legacy
                <span className="block text-6xl lg:text-7xl bg-gradient-to-r from-accent-gold to-accent-copper bg-clip-text text-transparent">
                  Awaits
                </span>
              </h2>
              <p className="font-body text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join our distinguished community of tabletop enthusiasts and begin crafting your own legendary gaming
                story within the halls of GameTable Manor.
              </p>
            </div>
          </div>

          {/* Enhanced Call to Action with Custom Button Art */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 relative z-10">
            <Link href="/profile">
              <Button size="lg" className="text-lg px-8 py-4 font-body">
                Enter the Manor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/discover-page">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 font-body bg-transparent">
                Explore Games
              </Button>
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/20 mb-4">
                <Dice6 className="h-8 w-8 text-accent-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Curate Collection</h3>
              <p className="font-body text-muted-foreground">
                Build and manage your personal library of tabletop treasures
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/20 mb-4">
                <Users className="h-8 w-8 text-accent-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Connect Players</h3>
              <p className="font-body text-muted-foreground">
                Find fellow adventurers and forge lasting gaming friendships
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/20 mb-4">
                <Calendar className="h-8 w-8 text-accent-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Host Events</h3>
              <p className="font-body text-muted-foreground">Organize memorable game nights and epic campaigns</p>
            </div>
          </div>

          {/* Top ornamental flourish */}
          <div className="text-accent-gold text-2xl">✦</div>

          {/* Subtitle */}
          <h2 className="font-cinzel text-2xl md:text-3xl text-accent-gold font-medium">
            Welcome to Your Exclusive Gaming Manor
          </h2>

          {/* Description */}
          <p className="font-merriweather text-lg md:text-xl text-accent-gold/80 leading-relaxed max-w-3xl mx-auto">
            Step into an elegant sanctuary where tabletop enthusiasts gather to discover remarkable games, forge lasting
            friendships, and create unforgettable gaming experiences.
          </p>

          {/* Establishment line */}
          <div className="flex items-center justify-center space-x-3 text-accent-gold/70">
            <span className="text-sm">♦</span>
            <span className="font-merriweather text-sm uppercase tracking-wider">
              Est. for Distinguished Gaming Society
            </span>
            <span className="text-sm">♦</span>
          </div>

          {/* Bottom ornamental elements */}
          <div className="pt-8 space-y-2">
            <div className="text-accent-gold/50 text-lg">❦</div>
          </div>
        </div>
      </div>
    </section>
  )
}
