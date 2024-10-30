'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, SkipForward, Volume2 } from 'lucide-react'

export default function EnhancedWorkoutPlanner() {
  const [height, setHeight] = useState('')
  const [currentWeight, setCurrentWeight] = useState('')
  const [targetWeight, setTargetWeight] = useState('')
  const [goal, setGoal] = useState('bulk')
  const [workoutDifficulty, setWorkoutDifficulty] = useState(5)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(50)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const generateWorkout = () => {
    // Workout generation logic (unchanged)
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0])
    if (audioRef.current) {
      audioRef.current.volume = newVolume[0] / 100
    }
  }

  const getFoodSuggestions = () => {
    if (goal === 'bulk') {
      return [
        "Lean meats (chicken, turkey, lean beef)",
        "Eggs and egg whites",
        "Greek yogurt",
        "Cottage cheese",
        "Whole grains (brown rice, quinoa, oats)",
        "Sweet potatoes",
        "Nuts and nut butters",
        "Avocado",
        "Olive oil",
        "Protein shakes"
      ]
    } else {
      return [
        "Grilled chicken or fish",
        "Egg whites",
        "Low-fat Greek yogurt",
        "Leafy greens (spinach, kale)",
        "Broccoli and other fibrous vegetables",
        "Berries",
        "Lean turkey",
        "Tofu",
        "Lentils and beans",
        "Low-fat cottage cheese"
      ]
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Enhanced Workout Planner</CardTitle>
        <CardDescription>Personalize your fitness journey</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="workout">Workout</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your height"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currentWeight">Current Weight (kg)</Label>
                <Input
                  id="currentWeight"
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(e.target.value)}
                  placeholder="Enter your current weight"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetWeight">Target Weight (kg)</Label>
                <Input
                  id="targetWeight"
                  value={targetWeight}
                  onChange={(e) => setTargetWeight(e.target.value)}
                  placeholder="Enter your target weight"
                />
              </div>
              <div className="space-y-2">
                <Label>Goal</Label>
                <RadioGroup defaultValue="bulk" onValueChange={setGoal}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bulk" id="bulk" />
                    <Label htmlFor="bulk">Bulk</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cut" id="cut" />
                    <Label htmlFor="cut">Cut</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="workout" className="space-y-4">
            <div className="space-y-2">
              <Label>Workout Difficulty</Label>
              <Slider
                value={[workoutDifficulty]}
                onValueChange={([value]) => setWorkoutDifficulty(value)}
                max={10}
                step={1}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
              </div>
            </div>
            <Button onClick={generateWorkout} className="w-full">Generate Adaptive Workout</Button>
          </TabsContent>
          <TabsContent value="nutrition" className="space-y-4">
            <h3 className="text-lg font-semibold">Recommended Foods for {goal === 'bulk' ? 'Bulking' : 'Cutting'}</h3>
            <ul className="list-disc pl-5 space-y-1">
              {getFoodSuggestions().map((food, index) => (
                <li key={index}>{food}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="music" className="space-y-4">
            <div className="space-y-2">
              <Label>Phonk Music for Workout Aggression</Label>
              <div className="flex items-center space-x-2">
                <Button size="icon" onClick={togglePlay}>
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button size="icon" onClick={() => { if (audioRef.current) audioRef.current.currentTime = 0; }}>
                  <SkipForward className="h-4 w-4" />
                </Button>
                <Volume2 className="h-4 w-4" />
                <Slider
                  className="w-[60%]"
                  value={[volume]}
                  onValueChange={handleVolumeChange}
                  max={100}
                  step={1}
                />
              </div>
            </div>
            <audio
              ref={audioRef}
              src="/music.mp3" // Corrected path to music in public folder
              loop
            />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Customize your profile, workout, nutrition, and music for an optimal fitness experience.</p>
      </CardFooter>
    </Card>
  )
}
