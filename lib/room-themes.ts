// Room theme data with images and extracted color palettes
export interface RoomTheme {
  id: string
  name: string
  image: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
  }
  description: string
  atmosphere: string
  unlockLevel: number
  category: "Ground Floor" | "Second Floor" | "Basement"
  isActive?: boolean
  isUnlocked?: boolean
  canUnlock?: boolean
}

export const roomThemes: RoomTheme[] = [
  // Ground Floor Rooms
  {
    id: "main-hall",
    name: "Main Hall",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20hall%2001.jpg-DpsYcUHFaTwvTp9wXy5kieQgoDHKMM.jpeg",
    colors: {
      primary: "#8B1538", // Deep burgundy
      secondary: "#8B4513", // Rich mahogany
      accent: "#DAA520", // Golden accents
      background: "#F5F5DC", // Cream marble
    },
    description: "The grand entrance with burgundy elegance and golden accents",
    atmosphere: "Majestic and welcoming",
    unlockLevel: 5,
    category: "Ground Floor",
    isActive: true,
    isUnlocked: true,
  },
  {
    id: "library",
    name: "Library",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#3C2415", // Deep mahogany
      secondary: "#8B4513", // Rich brown
      accent: "#DAA520", // Golden accents
      background: "#F5F5DC", // Cream
    },
    description: "Deep mahogany shelves filled with gaming wisdom",
    atmosphere: "Scholarly and contemplative",
    unlockLevel: 10,
    category: "Ground Floor",
    isActive: false,
    isUnlocked: true,
  },
  {
    id: "conservatory",
    name: "Conservatory",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#228B22", // Forest green
      secondary: "#90EE90", // Light green
      accent: "#DAA520", // Golden accents
      background: "#F0FFF0", // Honeydew
    },
    description: "Lush greenery and natural light for peaceful gaming",
    atmosphere: "Fresh and rejuvenating",
    unlockLevel: 15,
    category: "Ground Floor",
    isActive: false,
    isUnlocked: false,
    canUnlock: true,
  },
  {
    id: "fireside-lounge",
    name: "Fireside Lounge",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fireside%20Lounge%2001.jpg-M3u72S7v7OEudxT8hqP812tt9gR2Jb.jpeg",
    colors: {
      primary: "#D2691E", // Terracotta
      secondary: "#8B4513", // Rich brown leather
      accent: "#DAA520", // Golden firelight
      background: "#FFF8DC", // Cornsilk
    },
    description: "Warm terracotta tones by the crackling fireplace",
    atmosphere: "Cozy and intimate",
    unlockLevel: 20,
    category: "Ground Floor",
    isActive: false,
    isUnlocked: false,
    canUnlock: true,
  },
  {
    id: "bar",
    name: "Bar",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#FFBF00", // Amber
      secondary: "#B87333", // Dark brass
      accent: "#DAA520", // Golden highlights
      background: "#FFF8DC", // Cornsilk
    },
    description: "Amber spirits and brass fixtures for social gaming",
    atmosphere: "Lively and social",
    unlockLevel: 25,
    category: "Ground Floor",
    isActive: false,
    isUnlocked: false,
    canUnlock: true,
  },
  {
    id: "garden",
    name: "Garden",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Garden%2002.jpg-XxukuZGkzYw89WbYIH9btWaF2ddlvH.jpeg",
    colors: {
      primary: "#9CAF88", // Sage green
      secondary: "#F5F5DC", // Cream columns
      accent: "#DAA520", // Golden sunlight
      background: "#F0FFF0", // Honeydew
    },
    description: "Sage green tranquility with golden sunlight",
    atmosphere: "Serene and natural",
    unlockLevel: 30,
    category: "Ground Floor",
    isActive: false,
    isUnlocked: false,
    canUnlock: true,
  },
  {
    id: "gallery",
    name: "Gallery",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gallery%2001.jpg-6ENDBJTG0rOy3yXPcrdwoNETWilXcm.jpeg",
    colors: {
      primary: "#000080", // Navy blue
      secondary: "#F5F5F5", // White walls
      accent: "#DAA520", // Golden frames
      background: "#FFFEF7", // Ivory
    },
    description: "Royal navy walls showcasing gaming masterpieces",
    atmosphere: "Refined and artistic",
    unlockLevel: 35,
    category: "Ground Floor",
    isActive: false,
    isUnlocked: false,
    canUnlock: true,
  },

  // Second Floor Rooms
  {
    id: "balcony",
    name: "Balcony",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#F5F5DC", // Cream
      secondary: "#FF6347", // Sunset orange
      accent: "#DAA520", // Golden highlights
      background: "#FFF8DC", // Cornsilk
    },
    description: "Cream elegance with sunset views over the grounds",
    atmosphere: "Romantic and inspiring",
    unlockLevel: 40,
    category: "Second Floor",
    isActive: false,
    isUnlocked: false,
    canUnlock: false,
  },
  {
    id: "ballroom",
    name: "Ballroom",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#DAA520", // Golden
      secondary: "#F8F8FF", // Ghost white
      accent: "#FFD700", // Gold
      background: "#FFFAF0", // Floral white
    },
    description: "Golden grandeur with crystal white accents",
    atmosphere: "Luxurious and celebratory",
    unlockLevel: 45,
    category: "Second Floor",
    isActive: false,
    isUnlocked: false,
    canUnlock: false,
  },
  {
    id: "map-room",
    name: "Map Room",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#DEB887", // Burlywood
      secondary: "#B87333", // Dark brass
      accent: "#DAA520", // Golden compass
      background: "#F5F5DC", // Beige
    },
    description: "Sepia charts and brass instruments for strategic planning",
    atmosphere: "Adventurous and tactical",
    unlockLevel: 50,
    category: "Second Floor",
    isActive: false,
    isUnlocked: false,
    canUnlock: false,
  },
  {
    id: "observatory",
    name: "Observatory",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#4169E1", // Royal blue
      secondary: "#C0C0C0", // Silver
      accent: "#DAA520", // Golden telescope
      background: "#191970", // Midnight blue
    },
    description: "Cosmic blue depths with silver starlight",
    atmosphere: "Mystical and contemplative",
    unlockLevel: 55,
    category: "Second Floor",
    isActive: false,
    isUnlocked: false,
    canUnlock: false,
  },
  {
    id: "theater-room",
    name: "Theater Room",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#8B0000", // Dark red
      secondary: "#DAA520", // Golden stage lights
      accent: "#FFD700", // Gold trim
      background: "#2F1B14", // Dark brown
    },
    description: "Velvet red curtains and golden stage lights",
    atmosphere: "Dramatic and entertaining",
    unlockLevel: 60,
    category: "Second Floor",
    isActive: false,
    isUnlocked: false,
    canUnlock: false,
  },
  {
    id: "clock-tower",
    name: "Clock Tower",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#B87333", // Dark brass
      secondary: "#CD7F32", // Bronze
      accent: "#DAA520", // Golden gears
      background: "#F5DEB3", // Wheat
    },
    description: "Brass gears and bronze mechanisms marking time",
    atmosphere: "Mechanical and precise",
    unlockLevel: 65,
    category: "Second Floor",
    isActive: false,
    isUnlocked: false,
    canUnlock: false,
  },
  {
    id: "war-room",
    name: "War Room",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#355E3B", // Hunter green
      secondary: "#CD7F32", // Bronze
      accent: "#DAA520", // Golden medals
      background: "#F5F5DC", // Beige maps
    },
    description: "Military green strategy with bronze battle plans",
    atmosphere: "Strategic and commanding",
    unlockLevel: 70,
    category: "Second Floor",
    isActive: false,
    isUnlocked: false,
    canUnlock: false,
  },

  // Basement Rooms
  {
    id: "alchemist-laboratory",
    name: "Alchemist Laboratory",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#50C878", // Emerald
      secondary: "#007FFF", // Azure
      accent: "#DAA520", // Golden equipment
      background: "#F0F8FF", // Alice blue
    },
    description: "Emerald potions and azure mystical energies",
    atmosphere: "Magical and experimental",
    unlockLevel: 75,
    category: "Basement",
    isActive: false,
    isUnlocked: false,
    canUnlock: false,
  },
  {
    id: "dungeon",
    name: "Dungeon",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#DAA520", // Honey gold
      secondary: "#CD7F32", // Bronze
      accent: "#B8860B", // Dark goldenrod
      background: "#F5DEB3", // Wheat stone
    },
    description: "Honey stone walls with bronze torch brackets",
    atmosphere: "Mysterious and ancient",
    unlockLevel: 80,
    category: "Basement",
    isActive: false,
    isUnlocked: false,
    canUnlock: false,
  },
  {
    id: "underground-temple",
    name: "Underground Temple",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#708090", // Slate gray
      secondary: "#008080", // Teal
      accent: "#DAA520", // Golden altar
      background: "#F8F8FF", // Ghost white
    },
    description: "Stone gray sanctity with teal sacred waters",
    atmosphere: "Sacred and timeless",
    unlockLevel: 85,
    category: "Basement",
    isActive: false,
    isUnlocked: false,
    canUnlock: false,
  },
  {
    id: "crystal-cavern",
    name: "Crystal Cavern",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#F7CAC9", // Rose quartz
      secondary: "#9966CC", // Amethyst
      accent: "#DAA520", // Golden veins
      background: "#E6E6FA", // Lavender
    },
    description: "Rose quartz formations and amethyst clusters",
    atmosphere: "Ethereal and enchanting",
    unlockLevel: 90,
    category: "Basement",
    isActive: false,
    isUnlocked: false,
    canUnlock: false,
  },
  {
    id: "treasure-vault",
    name: "Treasure Vault",
    image: "/placeholder.svg?height=300&width=400",
    colors: {
      primary: "#DAA520", // Golden treasures
      secondary: "#50C878", // Emerald gems
      accent: "#FFD700", // Pure gold
      background: "#FFF8DC", // Cornsilk
    },
    description: "Golden riches and emerald treasures beyond measure",
    atmosphere: "Opulent and rewarding",
    unlockLevel: 95,
    category: "Basement",
    isActive: false,
    isUnlocked: false,
    canUnlock: false,
  },
]

// Helper functions
export function getRoomTheme(roomId: string): RoomTheme | undefined {
  return roomThemes.find((room) => room.id === roomId)
}

export function getActiveTheme(): RoomTheme {
  return roomThemes.find((room) => room.isActive) || roomThemes[0]
}

export function getRoomsByCategory(category: RoomTheme["category"]): RoomTheme[] {
  return roomThemes.filter((room) => room.category === category)
}
