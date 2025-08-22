import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"

const categories = ["Board Games", "RPGs", "Miniatures", "Trading Cards"]
const games = [
  {
    id: 1,
    title: "Everdell",
    category: "Strategy",
    players: "1-4",
    time: "40-80 min",
    rating: 8.1,
    image: "/placeholder.svg?height=120&width=80",
  },
  {
    id: 2,
    title: "Root",
    category: "Strategy",
    players: "2-4",
    time: "60-90 min",
    rating: 8.3,
    image: "/placeholder.svg?height=120&width=80",
  },
  {
    id: 3,
    title: "Wingspan",
    category: "Engine Building",
    players: "1-5",
    time: "40-70 min",
    rating: 8.1,
    image: "/placeholder.svg?height=120&width=80",
  },
]

export function DiscoverGames() {
  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <Card className="room-furniture">
        <CardHeader>
          <CardTitle className="text-2xl font-charm ornate-text">Discover New Games</CardTitle>
          <p className="font-merriweather text-muted-foreground">
            Search the vast library to find and add games to your personal collection.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search games..." className="pl-10 font-merriweather" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              <span className="font-cinzel">Filters</span>
            </Button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Board Games" ? "default" : "outline"}
                size="sm"
                className="font-cinzel"
              >
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Card key={game.id} className="picture-frame overflow-hidden">
            <div className="aspect-[3/4] bg-muted">
              <img src={game.image || "/placeholder.svg"} alt={game.title} className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-cinzel font-semibold">{game.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="font-merriweather">{game.players} players</span>
                  <span className="font-merriweather">{game.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="font-cinzel">
                    {game.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium">⭐ {game.rating}</span>
                  </div>
                </div>
                <Button className="w-full font-cinzel">Add to Collection</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
