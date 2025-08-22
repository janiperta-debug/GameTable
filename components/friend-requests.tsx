import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Check, X, UserPlus } from "lucide-react"

const friendRequests = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    mutualFriends: 3,
    commonGames: ["Wingspan", "Azul", "Ticket to Ride"],
  },
  {
    id: 2,
    name: "David Park",
    avatar: "/placeholder.svg?height=40&width=40",
    mutualFriends: 1,
    commonGames: ["Gloomhaven", "Spirit Island"],
  },
]

export function FriendRequests() {
  return (
    <Card className="decorative-border">
      <CardHeader>
        <CardTitle className="font-cinzel flex items-center space-x-2">
          <UserPlus className="h-5 w-5" />
          <span>Friend Requests</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {friendRequests.map((request) => (
            <div key={request.id} className="space-y-3">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.name} />
                  <AvatarFallback>
                    {request.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-sm">{request.name}</p>
                  <p className="text-xs text-muted-foreground">{request.mutualFriends} mutual friends</p>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                <p>Common games: {request.commonGames.join(", ")}</p>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" className="flex-1">
                  <Check className="h-3 w-3 mr-1" />
                  Accept
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  <X className="h-3 w-3 mr-1" />
                  Decline
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
