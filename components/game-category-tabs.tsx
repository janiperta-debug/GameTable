"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BoardGamesTab } from "@/components/board-games-tab"
import { RPGsTab } from "@/components/rpgs-tab"
import { MiniaturesTab } from "@/components/miniatures-tab"
import { TradingCardsTab } from "@/components/trading-cards-tab"
import { Dice6, Target, Swords, CreditCard } from "lucide-react"

export function GameCategoryTabs() {
  const [activeTab, setActiveTab] = useState("board-games")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8 bg-surface-light/50">
        <TabsTrigger
          value="board-games"
          className="flex items-center space-x-2 data-[state=active]:theme-accent-gold font-body"
        >
          <Dice6 className="h-4 w-4" />
          <span>Board Games</span>
        </TabsTrigger>
        <TabsTrigger
          value="rpgs"
          className="flex items-center space-x-2 data-[state=active]:theme-accent-gold font-body"
        >
          <Target className="h-4 w-4" />
          <span>RPGs</span>
        </TabsTrigger>
        <TabsTrigger
          value="miniatures"
          className="flex items-center space-x-2 data-[state=active]:theme-accent-gold font-body"
        >
          <Swords className="h-4 w-4" />
          <span>Miniatures</span>
        </TabsTrigger>
        <TabsTrigger
          value="trading-cards"
          className="flex items-center space-x-2 data-[state=active]:theme-accent-gold font-body"
        >
          <CreditCard className="h-4 w-4" />
          <span>Trading Cards</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="board-games">
        <BoardGamesTab />
      </TabsContent>

      <TabsContent value="rpgs">
        <RPGsTab />
      </TabsContent>

      <TabsContent value="miniatures">
        <MiniaturesTab />
      </TabsContent>

      <TabsContent value="trading-cards">
        <TradingCardsTab />
      </TabsContent>
    </Tabs>
  )
}
