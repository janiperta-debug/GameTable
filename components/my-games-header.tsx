import { BookOpen } from "lucide-react"

export function MyGamesHeader() {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <BookOpen className="h-8 w-8 text-amber-600 mr-3" />
        <h1 className="font-heading text-4xl font-bold text-accent-gold">My Game Collection</h1>
      </div>
      <p className="font-body text-muted-foreground text-lg">
        Manage and explore your personal hoard of tabletop adventures.
      </p>
    </div>
  )
}
