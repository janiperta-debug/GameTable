import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Board Game Night",
    date: "Tonight, 7:00 PM",
    location: "The Gaming Lounge",
    attendees: 8,
    maxAttendees: 12,
    status: "attending",
  },
  {
    id: 2,
    title: "D&D Campaign: The Lost Mines",
    date: "Tomorrow, 2:00 PM",
    location: "Mike's House",
    attendees: 5,
    maxAttendees: 6,
    status: "maybe",
  },
  {
    id: 3,
    title: "Magic: The Gathering Draft",
    date: "Friday, 6:30 PM",
    location: "Local Game Store",
    attendees: 12,
    maxAttendees: 16,
    status: "invited",
  },
]

export function UpcomingEvents() {
  return (
    <Card className="decorative-border">
      <CardHeader>
        <CardTitle className="font-cinzel">Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="p-4 rounded-lg border bg-card">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-sm">{event.title}</h4>
                  <Badge variant={event.status === "attending" ? "default" : "secondary"} className="text-xs">
                    {event.status}
                  </Badge>
                </div>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>
                      {event.attendees}/{event.maxAttendees} attending
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4 bg-transparent" size="sm">
          View All Events
        </Button>
      </CardContent>
    </Card>
  )
}
