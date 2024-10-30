'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function WorkoutCustomizationPage() {
  const [duration, setDuration] = useState('30')
  const [focus, setFocus] = useState('fullBody')
  const [equipment, setEquipment] = useState<string[]>([])

  const handleEquipmentChange = (item: string) => {
    setEquipment(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )
  }

  const generateWorkout = () => {
    console.log('Generating workout:', { duration, focus, equipment })
    // Implement workout generation logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Customize Your Workout</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="duration">Workout Duration (minutes)</Label>
              <Input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="focus">Workout Focus</Label>
              <Select value={focus} onValueChange={setFocus}>
                <SelectTrigger id="focus">
                  <SelectValue placeholder="Select focus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fullBody">Full Body</SelectItem>
                  <SelectItem value="upperBody">Upper Body</SelectItem>
                  <SelectItem value="lowerBody">Lower Body</SelectItem>
                  <SelectItem value="core">Core</SelectItem>
                  <SelectItem value="cardio">Cardio</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Available Equipment</Label>
              <div className="grid grid-cols-2 gap-2">
                {['Dumbbells', 'Resistance Bands', 'Kettlebell', 'Pull-up Bar', 'Yoga Mat', 'Jump Rope'].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Checkbox
                      id={item}
                      checked={equipment.includes(item)}
                      onCheckedChange={() => handleEquipmentChange(item)}
                    />
                    <label htmlFor={item} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <Button onClick={generateWorkout} className="w-full">Generate Custom Workout</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}