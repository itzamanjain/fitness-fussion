import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dumbbell, Zap, Trophy, Users } from 'lucide-react'

export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden relative">
      {/* Background Beams */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-blue-500 to-cyan-500 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Dumbbell size={32} className="text-purple-500" />
              <span className="text-2xl font-bold">FitnessFusion</span>
            </div>
            <div className="space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-white transition">Login</Link>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900">
                Sign Up
              </Button>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Forge Your Ultimate Physique
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unleash your potential with AI-powered workouts, nutrition plans, and a community of dedicated bodybuilders.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="max-w-xs bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Start Free Trial
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard 
              icon={<Zap size={32} />}
              title="AI-Powered Workouts"
              description="Personalized training plans that evolve with your gains"
            />
            <FeatureCard 
              icon={<Trophy size={32} />}
              title="Progress Tracking"
              description="Visualize your improvements and smash your PRs"
            />
            <FeatureCard 
              icon={<Users size={32} />}
              title="Bodybuilder Community"
              description="Connect, compete, and grow with fellow iron enthusiasts"
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Sculpt Your Legacy?</h2>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200">
              Join FitnessFusion Now
            </Button>
          </div>
        </main>

        <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
          © 2023 FitnessFusion. All rights reserved. | 
          <Link href="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> | 
          <Link href="/terms" className="hover:text-white ml-1">Terms of Service</Link>
        </footer>
      </div>
    </div>
    </>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}


function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 transition-transform hover:scale-105">
      <div className="text-purple-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}