'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CommunityPage() {
  const [forumPosts, setForumPosts] = useState([
    { id: 1, author: 'Jane', title: 'Best protein shakes?', replies: 15 },
    { id: 2, author: 'Mike', title: 'How to improve squat form', replies: 8 },
    { id: 3, author: 'Sarah', title: 'Motivation tips for early morning workouts', replies: 22 },
  ])

  const [workoutPlans, setWorkoutPlans] = useState([
    { id: 1, author: 'FitnessGuru', title: '30-Day HIIT Challenge', likes: 156 },
    { id: 2, author: 'YogaMaster', title: 'Beginner\'s Yoga Flow', likes: 89 },
    { id: 3, author: 'StrengthCoach', title: '5x5 Strength Program', likes: 203 },
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Community</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="forum">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="forum">Forum</TabsTrigger>
              <TabsTrigger value="workouts">User Workouts</TabsTrigger>
            </TabsList>
            <TabsContent value="forum">
              <div className="space-y-4">
                {forumPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">By {post.author} • {post.replies} replies</p>
                    </div>
                    <Button variant="outline">View</Button>
                  </div>
                ))}
                <Button className="w-full">Create New Post</Button>
              </div>
            </TabsContent>
            <TabsContent value="workouts">
              <div className="space-y-4">
                {workoutPlans.map((plan) => (
                  <div key={plan.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{plan.title}</h3>
                      <p className="text-sm text-muted-foreground">By {plan.author} • {plan.likes} likes</p>
                    </div>
                    <Button variant="outline">View</Button>
                  </div>
                ))}
                <Button className="w-full">Share Your Workout</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}