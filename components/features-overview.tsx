import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Palette, Calendar, MessageCircle } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Game Collection",
    description: "Organize your tabletop library with detailed tracking, ratings, and play logs.",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "Player Network",
    description: "Connect with local gamers, find groups, and build lasting friendships.",
    color: "text-green-600",
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Earn trophies, track progress, and celebrate your gaming milestones.",
    color: "text-amber-600",
  },
  {
    icon: Palette,
    title: "Manor Themes",
    description: "Customize your experience with elegant room themes and atmospheric settings.",
    color: "text-purple-600",
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Schedule game nights, manage RSVPs, and coordinate group activities.",
    color: "text-orange-600",
  },
  {
    icon: MessageCircle,
    title: "Community Chat",
    description: "Stay connected with messaging, forums, and real-time discussions.",
    color: "text-pink-600",
  },
]

export function FeaturesOverview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="ornate-text font-heading text-4xl font-bold mb-4">Manor Features</h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to enhance your tabletop gaming experience in one elegant platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="room-furniture hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background mb-4">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
