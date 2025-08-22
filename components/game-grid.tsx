import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, Clock, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const games = [
  {
    id: 1,
    title: "Wingspan",
    image: "/placeholder.svg?height=200&width=200",
    rating: 8.1,
    userRating: 9,
    players: "1-5",
    playTime: "40-70 min",
    year: 2019,
    category: "Strategy",
    owned: true,
    wishlist: false,
  },
  {
    id: 2,
    title: "Gloomhaven",
    image: "/placeholder.svg?height=200&width=200",
    rating: 8.8,
    userRating: 10,
    players: "1-4",
    playTime: "60-120 min",
    year: 2017,
    category: "Adventure",
    owned: true,
    wishlist: false,
  },
  {
    id: 3,
    title: "Azul",
    image: "/placeholder.svg?height=200&width=200",
    rating: 7.8,
    userRating: 8,
    players: "2-4",
    playTime: "30-45 min",
    year: 2017,
    category: "Abstract",
    owned: true,
    wishlist: false,
  },
  {
    id: 4,
    title: "Spirit Island",
    image: "/placeholder.svg?height=200&width=200",
    rating: 8.3,
    userRating: 9,
    players: "1-4",
    playTime: "90-120 min",
    year: 2017,
    category: "Cooperative",
    owned: true,
    wishlist: false,
  },
  {
    id: 5,
    title: "Ticket to Ride",
    image: "/placeholder.svg?height=200&width=200",
    rating: 7.4,
    userRating: 8,
    players: "2-5",
    playTime: "30-60 min",
    year: 2004,
    category: "Family",
    owned: true,
    wishlist: false,
  },
  {
    id: 6,
    title: "Pandemic",
    image: "/placeholder.svg?height=200&width=200",
    rating: 7.6,
    userRating: 8,
    players: "2-4",
    playTime: "45 min",
    year: 2008,
    category: "Cooperative",
    owned: true,
    wishlist: false,
  },
]

export function GameGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {games.map((game) => (
        <Card key={game.id} className="room-furniture group overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-square overflow-hidden bg-muted">
            <img
              src={game.image || "/placeholder.svg"}
              alt={game.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold leading-tight font-body">{game.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">({game.year})</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="font-body">Edit Details</DropdownMenuItem>
                    <DropdownMenuItem className="font-body">Log Play</DropdownMenuItem>
                    <DropdownMenuItem className="font-body">Add to Wishlist</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive font-body">Remove</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="font-body">{game.rating}</span>
                  <span className="text-muted-foreground font-body">({game.userRating}/10)</span>
                </div>
                <Badge variant="secondary" className="text-xs font-body">
                  {game.category}
                </Badge>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3" />
                  <span className="font-body">{game.players}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span className="font-body">{game.playTime}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
