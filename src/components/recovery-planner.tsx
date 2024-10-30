'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export default function RecoveryPlannerPage() {
  const [soreness, setSoreness] = useState(5)
  const [sleep, setSleep] = useState(7)
  const [stress, setStress] = useState(5)

  const generateRecoveryPlan = () => {
    console.log('Generating recovery plan:', { soreness, sleep, stress })
    // Implement recovery plan generation logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Recovery and Rest Day Planner</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Muscle Soreness (1-10)</Label>
              <Slider
                value={[soreness]}
                onValueChange={([value]) => setSoreness(value)}
                max={10}
                step={1}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Hours of Sleep Last Night</Label>
              <Slider
                value={[sleep]}
                onValueChange={([value]) => setSleep(value)}
                max={12}
                step={0.5}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>0</span>
                <span>12+</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Stress Level (1-10)</Label>
              <Slider
                value={[stress]}
                onValueChange={([value]) => setStress(value)}
                max={10}
                step={1}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
            <Button onClick={generateRecoveryPlan} className="w-full">Generate Recovery Plan</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}