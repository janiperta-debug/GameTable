import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Swords, Plus, ChevronDown } from "lucide-react"

// Mock data for miniatures
const miniatures = [
  {
    id: 1,
    title: "World Eaters",
    image: "/placeholder.svg?height=80&width=80",
    source: "MANUAL",
  },
]

export function MiniaturesTab() {
  return (
    <div className="space-y-6">
      {/* Management Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Collection Info */}
        <Card className="decorative-border">
          <CardHeader>
            <CardTitle className="font-cinzel flex items-center">
              <Swords className="h-5 w-5 mr-2 text-amber-600" />
              Miniatures Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-amber-600 mb-2">Miniatures Collection</h4>
              <p className="text-sm text-muted-foreground mb-2">Organize your armies, factions, and miniature games.</p>
              <p className="text-xs text-muted-foreground">
                Manual entry for Warhammer 40K, Age of Sigmar, X-Wing, and more!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Manual Add */}
        <Card className="decorative-border">
          <CardHeader>
            <CardTitle className="font-cinzel">Add Miniature Manually</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Add miniature games and wargames to your collection.</p>
            <Button className="w-full bg-amber-600 hover:bg-amber-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Miniature Manually
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Games List */}
      <Card className="decorative-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-cinzel">Your Miniatures Collection</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-transparent">
                Date Added (Newest First)
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Date Added (Newest First)</DropdownMenuItem>
              <DropdownMenuItem>Date Added (Oldest First)</DropdownMenuItem>
              <DropdownMenuItem>Title (A-Z)</DropdownMenuItem>
              <DropdownMenuItem>Title (Z-A)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {miniatures.map((game) => (
              <div
                key={game.id}
                className="flex items-center space-x-4 p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors cursor-pointer"
              >
                <div className="w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                  <img src={game.image || "/placeholder.svg"} alt={game.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-cinzel font-semibold text-amber-600">{game.title}</h4>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {game.source}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
