import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Calendar, Trophy } from "lucide-react"

const stats = [
  {
    title: "Games in Collection",
    value: "247",
    change: "+12 this month",
    icon: BookOpen,
    color: "text-blue-600",
  },
  {
    title: "Gaming Friends",
    value: "38",
    change: "+3 new friends",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "Events Attended",
    value: "15",
    change: "5 this month",
    icon: Calendar,
    color: "text-purple-600",
  },
  {
    title: "Games Played",
    value: "89",
    change: "+7 this week",
    icon: Trophy,
    color: "text-orange-600",
  },
]

export function DashboardStats() {
  return (
    <Card className="decorative-border">
      <CardHeader>
        <CardTitle className="font-cinzel">Your Gaming Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.title} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
              <div className={`p-2 rounded-lg bg-background ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
