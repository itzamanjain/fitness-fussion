'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function GoalsNotificationsPage() {
  const [goals, setGoals] = useState({
    dailySteps: '10000',
    weeklyWorkouts: '5',
    monthlyWeightLoss: '2',
  })

  const [notifications, setNotifications] = useState({
    workoutReminders: true,
    progressUpdates: true,
    friendActivities: false,
  })

  const handleGoalChange = (goal: keyof typeof goals, value: string) => {
    setGoals(prev => ({ ...prev, [goal]: value }))
  }

  const toggleNotification = (notification: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [notification]: !prev[notification] }))
  }

  const saveSettings = () => {
    console.log('Saving goals and notification settings:', { goals, notifications })
    // Implement save logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Goals and Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Your Goals</h3>
              <div className="space-y-2">
                <Label htmlFor="dailySteps">Daily Steps</Label>
                <Input
                  id="dailySteps"
                  type="number"
                  value={goals.dailySteps}
                  onChange={(e) => handleGoalChange('dailySteps', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weeklyWorkouts">Weekly Workouts</Label>
                <Input
                  id="weeklyWorkouts"
                  type="number"
                  value={goals.weeklyWorkouts}
                  onChange={(e) => handleGoalChange('weeklyWorkouts', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="monthlyWeightLoss">Monthly Weight Loss (kg)</Label>
                <Input
                  id="monthlyWeightLoss"
                  type="number"
                  value={goals.monthlyWeightLoss}
                  onChange={(e) => handleGoalChange('monthlyWeightLoss', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Notification Settings</h3>
              <div className="flex items-center justify-between">
                <Label htmlFor="workoutReminders">Workout Reminders</Label>
                <Switch
                  id="workoutReminders"
                  checked={notifications.workoutReminders}
                  onCheckedChange={() => toggleNotification('workoutReminders')}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="progressUpdates">Progress Updates</Label>
                <Switch
                  id="progressUpdates"
                  checked={notifications.progressUpdates}
                  onCheckedChange={() => toggleNotification('progressUpdates')}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="friendActivities">Friend Activities</Label>
                <Switch
                  id="friendActivities"
                  checked={notifications.friendActivities}
                  onCheckedChange={() => toggleNotification('friendActivities')}
                />
              </div>
            </div>
            <Button onClick={saveSettings} className="w-full">Save Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}