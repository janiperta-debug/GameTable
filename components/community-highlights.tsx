import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Eleanor Whitmore",
    title: "Strategy Enthusiast",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "GameTable has transformed how I connect with fellow strategists. The manor atmosphere makes every interaction feel special.",
    rating: 5,
    games: 247,
  },
  {
    name: "Marcus Blackwood",
    title: "Event Organizer",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "Hosting events through GameTable feels like opening my own gaming salon. The community is incredibly welcoming.",
    rating: 5,
    games: 189,
  },
  {
    name: "Isabella Chen",
    title: "Collection Curator",
    avatar: "/placeholder.svg?height=60&width=60",
    quote: "The elegant interface makes cataloging my collection a joy. It's like having a personal library curator.",
    rating: 5,
    games: 312,
  },
]

const recentActivity = [
  { action: "New member Eleanor joined the manor", time: "2 hours ago" },
  { action: "Strategy Night event created by Marcus", time: "4 hours ago" },
  { action: "Isabella added Everdell to her collection", time: "6 hours ago" },
  { action: "Weekly tournament concluded with 24 participants", time: "1 day ago" },
]

export function CommunityHighlights() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-amber-50/30 to-transparent dark:from-amber-950/10 dark:to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold mb-4">Voices from the Manor</h2>
          <p className="font-merriweather text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our distinguished members about their experiences in our gaming sanctuary
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto mb-16">
          {/* Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="decorative-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-cinzel font-semibold">{testimonial.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.games} games
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{testimonial.title}</p>
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-4 w-4 text-amber-400 opacity-50" />
                        <p className="font-merriweather text-sm italic pl-4">"{testimonial.quote}"</p>
                      </div>
                      <div className="flex items-center mt-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="decorative-border h-fit">
              <CardContent className="p-6">
                <h3 className="font-cinzel text-xl font-semibold mb-6 text-center">Recent Manor Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-merriweather text-sm">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
