'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

export default function NutritionPage() {
  const [calories, setCalories] = useState(0)
  const [protein, setProtein] = useState(0)
  const [carbs, setCarbs] = useState(0)
  const [fat, setFat] = useState(0)

  const calorieGoal = 2000
  const proteinGoal = 150
  const carbsGoal = 250
  const fatGoal = 65

  const addMeal = () => {
    console.log('Adding meal')
    // Implement meal addition logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Nutrition Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Calories</Label>
                <span>{calories} / {calorieGoal}</span>
              </div>
              <Progress value={(calories / calorieGoal) * 100} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Protein</Label>
                <span>{protein}g / {proteinGoal}g</span>
              </div>
              <Progress value={(protein / proteinGoal) * 100} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Carbs</Label>
                <span>{carbs}g / {carbsGoal}g</span>
              </div>
              <Progress value={(carbs / carbsGoal) * 100} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Fat</Label>
                <span>{fat}g / {fatGoal}g</span>
              </div>
              <Progress value={(fat / fatGoal) * 100} />
            </div>
            <Button onClick={addMeal} className="w-full">Add Meal</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}