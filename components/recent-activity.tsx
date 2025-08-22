import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MessageCircle, Calendar, UserPlus } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "game_added",
    user: "You",
    action: "added",
    target: "Wingspan",
    time: "2 hours ago",
    icon: Clock,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    type: "friend_request",
    user: "Sarah Chen",
    action: "sent you a friend request",
    time: "4 hours ago",
    icon: UserPlus,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    type: "event_joined",
    user: "Mike Johnson",
    action: "joined your event",
    target: "D&D Campaign Night",
    time: "1 day ago",
    icon: Calendar,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    type: "message",
    user: "Alex Rivera",
    action: "sent you a message",
    time: "2 days ago",
    icon: MessageCircle,
    color: "bg-orange-100 text-orange-600",
  },
]

export function RecentActivity() {
  return (
    <Card className="decorative-border">
      <CardHeader>
        <CardTitle className="font-cinzel">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">
                  <span className="font-semibold">{activity.user}</span> {activity.action}
                  {activity.target && <span className="font-semibold"> {activity.target}</span>}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
