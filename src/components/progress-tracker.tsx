'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export default function ProgressTracker() {
  const [weight, setWeight] = useState('')
  const [measurements, setMeasurements] = useState([])

  const addMeasurement = () => {
    if (weight) {
      const newMeasurement = {
        date: new Date().toLocaleDateString(),
        weight: parseFloat(weight)
      }
      setMeasurements([...measurements, newMeasurement])
      setWeight('')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <div className="flex-1 space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              placeholder="Enter your weight"
            />
          </div>
          <Button onClick={addMeasurement} className="mt-8">Add Measurement</Button>
        </div>
        {measurements.length > 0 && (
          <div className="mt-4">
            <LineChart width={500} height={300} data={measurements}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="weight" stroke="#8884d8" />
            </LineChart>
          </div>
        )}
      </CardContent>
    </Card>
  )
}