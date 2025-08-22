import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Clock, Plus } from "lucide-react"

const suggestions = [
  {
    id: 1,
    title: "Everdell",
    image: "/placeholder.svg?height=120&width=120",
    rating: 8.2,
    players: "1-4",
    playTime: "40-80 min",
    category: "Strategy",
    reason: "Based on your love for Wingspan",
  },
  {
    id: 2,
    title: "Root",
    image: "/placeholder.svg?height=120&width=120",
    rating: 8.4,
    players: "2-4",
    playTime: "60-90 min",
    category: "Asymmetric",
    reason: "Popular with your friends",
  },
  {
    id: 3,
    title: "Brass: Birmingham",
    image: "/placeholder.svg?height=120&width=120",
    rating: 8.6,
    players: "2-4",
    playTime: "60-120 min",
    category: "Economic",
    reason: "Trending in your area",
  },
  {
    id: 4,
    title: "Spirit Island",
    image: "/placeholder.svg?height=120&width=120",
    rating: 8.3,
    players: "1-4",
    playTime: "90-120 min",
    category: "Cooperative",
    reason: "Matches your preferences",
  },
]

export function GameSuggestions() {
  return (
    <Card className="decorative-border">
      <CardHeader>
        <CardTitle className="font-cinzel">Recommended Games</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {suggestions.map((game) => (
            <div
              key={game.id}
              className="group relative overflow-hidden rounded-lg border bg-card p-4 hover:shadow-md transition-shadow"
            >
              <div className="aspect-square mb-3 overflow-hidden rounded-md bg-muted">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-sm leading-tight">{game.title}</h4>
                  <div className="flex items-center space-x-1 text-xs">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{game.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{game.players}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{game.playTime}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {game.category}
                </Badge>
                <p className="text-xs text-muted-foreground">{game.reason}</p>
                <Button size="sm" className="w-full">
                  <Plus className="h-3 w-3 mr-1" />
                  Add to Collection
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
