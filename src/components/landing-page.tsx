import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">FitnessFusion</h1>
          <div className="space-x-4">
            <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
            <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Transform Your Fitness Journey</h2>
          <p className="text-xl text-gray-600 mb-8">Personalized workouts, nutrition plans, and more - all in one app</p>
          <Button size="lg" asChild>
            <Link href="/app">Get Started Free</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI-Powered Workouts</h3>
              <p>Adaptive training plans that evolve with your progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Nutrition Guidance</h3>
              <p>Customized meal plans to support your fitness goals</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p>Visualize your improvements with detailed analytics</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        © 2023 FitnessFusion. All rights reserved.
      </footer>
    </div>
  )
}