'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SleepTracker() {
  const [sleepTime, setSleepTime] = useState('')
  const [wakeTime, setWakeTime] = useState('')
  const [sleepDuration, setSleepDuration] = useState(null)

  const calculateSleepDuration = () => {
    const sleep = new Date(`2000-01-01T${sleepTime}:00`)
    const wake = new Date(`2000-01-01T${wakeTime}:00`)
    if (wake < sleep) wake.setDate(wake.getDate() + 1)
    const diff = (wake - sleep) / 1000 / 60 / 60
    setSleepDuration(diff.toFixed(1))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sleep Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="sleepTime">Sleep Time</Label>
          <Input
            id="sleepTime"
            type="time"
            value={sleepTime}
            onChange={(e) => setSleepTime(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="wakeTime">Wake Time</Label>
          <Input
            id="wakeTime"
            type="time"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
          />
        </div>
        <Button onClick={calculateSleepDuration}>Calculate Sleep Duration</Button>
        {sleepDuration !== null && (
          <div className="text-center">
            <p className="text-lg">You slept for <span className="font-bold">{sleepDuration}</span> hours</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}