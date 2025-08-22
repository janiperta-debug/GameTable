import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    user: "Sarah Chen",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "completed Pandemic Legacy",
    time: "2 hours ago",
    type: "achievement",
  },
  {
    id: 2,
    user: "Mike Rodriguez",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "added Wingspan to wishlist",
    time: "4 hours ago",
    type: "wishlist",
  },
  {
    id: 3,
    user: "Emma Thompson",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "hosted D&D session",
    time: "1 day ago",
    type: "event",
  },
  {
    id: 4,
    user: "Alex Kim",
    avatar: "/placeholder.svg?height=32&width=32",
    action: "reviewed Gloomhaven",
    time: "2 days ago",
    type: "review",
  },
]

export function FriendActivity() {
  return (
    <Card className="room-furniture">
      <CardHeader>
        <CardTitle className="text-xl font-charm ornate-text">Friend Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                <AvatarFallback className="text-xs">
                  {activity.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-merriweather">
                  <span className="font-medium">{activity.user}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                {activity.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
