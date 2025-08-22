import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/10 via-transparent to-accent-copper/10" />
      <div className="absolute top-10 left-1/4 font-charm text-6xl opacity-20 text-accent-gold">♠</div>
      <div className="absolute bottom-10 right-1/4 font-charm text-6xl opacity-20 text-accent-copper">♦</div>

      <div className="container relative mx-auto px-4 text-center">
        <h2 className="ornate-text font-heading text-4xl lg:text-5xl font-bold mb-6">Ready to Begin Your Adventure?</h2>
        <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join our distinguished community of tabletop enthusiasts and discover your next great gaming experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/profile">
            <Button size="lg" className="text-lg px-8 py-4 font-body">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/themes-page">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 font-body bg-transparent">
              Explore Themes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
