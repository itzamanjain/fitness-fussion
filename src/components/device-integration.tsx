'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function DeviceIntegrationPage() {
  const [connectedDevices, setConnectedDevices] = useState({
    fitbit: false,
    appleWatch: false,
    googleFit: false,
  })

  const toggleDevice = (device: keyof typeof connectedDevices) => {
    setConnectedDevices(prev => ({ ...prev, [device]: !prev[device] }))
  }

  const syncData = () => {
    console.log('Syncing data from connected devices')
    // Implement data sync logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Device Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="fitbit">Fitbit</Label>
              <Switch
                id="fitbit"
                checked={connectedDevices.fitbit}
                onCheckedChange={() => toggleDevice('fitbit')}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="appleWatch">Apple Watch</Label>
              <Switch
                id="appleWatch"
                checked={connectedDevices.appleWatch}
                onCheckedChange={() => toggleDevice('appleWatch')}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="googleFit">Google Fit</Label>
              <Switch
                id="googleFit"
                checked={connectedDevices.googleFit}
                onCheckedChange={() => toggleDevice('googleFit')}
              />
            </div>
            <Button onClick={syncData} className="w-full">Sync Data</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}