'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function SocialPage() {
  const [friends, setFriends] = useState([
    { id: 1, name: 'Alice', progress: 75 },
    { id: 2, name: 'Bob', progress: 60 },
    { id: 3, name: 'Charlie', progress: 90 },
  ])

  const handleChallenge = (friendId: number) => {
    console.log('Challenged friend:', friendId)
    // Implement challenge logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Friends and Challenges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {friends.map((friend) => (
              <div key={friend.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder-avatar-${friend.id}.jpg`} alt={friend.name} />
                    <AvatarFallback>{friend.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{friend.name}</p>
                    <Progress value={friend.progress} className="w-32" />
                  </div>
                </div>
                <Button onClick={() => handleChallenge(friend.id)}>Challenge</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}