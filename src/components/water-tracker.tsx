'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function WaterTracker() {
  const [glasses, setGlasses] = useState(0)
  const goal = 8

  const addGlass = () => {
    setGlasses(prev => Math.min(prev + 1, goal))
  }

  const resetGlasses = () => {
    setGlasses(0)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Water Intake Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <span className="text-4xl font-bold">{glasses}</span>
          <span className="text-xl"> / {goal} glasses</span>
        </div>
        <Progress value={(glasses / goal) * 100} />
        <div className="flex justify-between">
          <Button onClick={addGlass}>Add Glass</Button>
          <Button variant="outline" onClick={resetGlasses}>Reset</Button>
        </div>
      </CardContent>
    </Card>
  )
}