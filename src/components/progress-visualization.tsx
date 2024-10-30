'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { date: '2023-01', weight: 80, bodyFat: 20, muscle: 60 },
  { date: '2023-02', weight: 79, bodyFat: 19, muscle: 60.5 },
  { date: '2023-03', weight: 78, bodyFat: 18, muscle: 61 },
  { date: '2023-04', weight: 77, bodyFat: 17, muscle: 61.5 },
  { date: '2023-05', weight: 76, bodyFat: 16, muscle: 62 },
  { date: '2023-06', weight: 75, bodyFat: 15, muscle: 62.5 },
]

export default function ProgressVisualizationPage() {
  const [metric, setMetric] = useState('weight')

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Select value={metric} onValueChange={setMetric}>
              <SelectTrigger>
                <SelectValue placeholder="Select metric" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weight">Weight</SelectItem>
                <SelectItem value="bodyFat">Body Fat %</SelectItem>
                <SelectItem value="muscle">Muscle Mass</SelectItem>
              </SelectContent>
            </Select>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey={metric} stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}