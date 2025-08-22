import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 main-hall-bg-pattern">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Manor Crest */}
        <div className="mb-6">
          <img
            src="/images/mainhall-crest.png"
            alt="GameTable Manor Crest"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto"
          />
        </div>

        {/* Main title */}
        <h1 className="text-6xl md:text-8xl font-charm ornate-text mb-4">GameTable</h1>

        {/* Decorative line with diamond */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="h-px bg-accent-gold w-32"></div>
          <div className="text-accent-gold text-lg">♦</div>
          <div className="h-px bg-accent-gold w-32"></div>
        </div>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-cinzel text-accent-gold mb-8">
          Welcome to Your Exclusive Gaming Manor
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl font-merriweather text-foreground max-w-3xl mx-auto leading-relaxed mb-8">
          Step into an elegant sanctuary where tabletop enthusiasts gather to discover remarkable games, forge lasting
          friendships, and create unforgettable gaming experiences.
        </p>

        {/* Establishment line */}
        <div className="flex items-center justify-center space-x-2 mb-12">
          <span className="text-accent-gold">♦</span>
          <span className="font-cinzel text-accent-gold uppercase tracking-wider text-sm">
            Est. for Distinguished Gaming Society
          </span>
          <span className="text-accent-gold">♦</span>
        </div>

        {/* Call to action */}
        <Link
          href="/profile"
          className="inline-block px-8 py-4 font-cinzel text-lg text-accent-gold border-2 border-accent-gold hover:bg-accent-gold hover:text-background transition-all duration-300 rounded-lg"
        >
          Enter the Manor
        </Link>

        {/* Bottom ornamental elements */}
        <div className="pt-12 space-y-4">
          <div className="text-accent-gold text-xl">❦</div>
        </div>
      </div>
    </div>
  )
}
