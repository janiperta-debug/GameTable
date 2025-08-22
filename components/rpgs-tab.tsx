import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Target, Download, Plus } from "lucide-react"

export function RPGsTab() {
  return (
    <div className="space-y-6">
      {/* Management Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Import from RPGGeek */}
        <Card className="decorative-border">
          <CardHeader>
            <CardTitle className="font-cinzel">Import from RPGGeek</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Enter your RPGGeek username to import your rpgs.</p>
            <div className="flex space-x-2">
              <Input placeholder="Your RPGGeek Username" className="flex-1" />
              <Button className="bg-amber-600 hover:bg-amber-700">
                <Download className="h-4 w-4 mr-2" />
                Import from RPGGeek
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Manual Add */}
        <Card className="decorative-border">
          <CardHeader>
            <CardTitle className="font-cinzel">Add RPG Manually</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Add RPGs and tabletop roleplaying games to your collection.</p>
            <Button className="w-full bg-amber-600 hover:bg-amber-700">
              <Plus className="h-4 w-4 mr-2" />
              Add RPG Manually
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Empty State */}
      <Card className="decorative-border">
        <CardContent className="py-16 text-center">
          <Target className="h-16 w-16 text-amber-600 mx-auto mb-4" />
          <h3 className="font-cinzel text-xl font-semibold mb-2 text-amber-600">RPGs Collection</h3>
          <p className="font-merriweather text-muted-foreground">
            Your rpgs collection is currently empty. Try adding items above!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
