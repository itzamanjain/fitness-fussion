'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import EnhancedWorkoutPlanner from './enhanced-workout-planner'
import ProgressTracker from './progress-tracker'
import WaterTracker from './water-tracker'
import SleepTracker from './sleep-tracker'
import Link from 'next/link'

export default function FitnessApp() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href='/' className="text-3xl font-bold mb-8 text-center">FitnessFusion Dashboard</Link>
      <Tabs defaultValue="workout" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="workout">Workout</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="water">Water</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
        </TabsList>
        <TabsContent value="workout">
          <EnhancedWorkoutPlanner />
        </TabsContent>
        <TabsContent value="progress">
          <ProgressTracker />
        </TabsContent>
        <TabsContent value="water">
          <WaterTracker />
        </TabsContent>
        <TabsContent value="sleep">
          <SleepTracker />
        </TabsContent>
      </Tabs>
    </div>
  )
}