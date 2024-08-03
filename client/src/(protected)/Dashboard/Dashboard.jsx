import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import NavigationBarDashboard from './components/NavigationBarDashboard'
const Dashboard = () => {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <NavigationBarDashboard />
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">General</h1>
        </div>
        <Card className="p-10 flex-1">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Total Applications</CardTitle>
                <CardDescription>View Applications Details</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center">
                <div className="text-4xl font-bold">124</div>
                <Button variant="outline" size="sm" className="ml-auto">
                  View details
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Total Users</CardTitle>
                <CardDescription>View Users Details</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center">
                <div className="text-4xl font-bold">2</div>
                <Button variant="outline" size="sm" className="ml-auto">
                  View details
                </Button>
              </CardContent>
            </Card>
          </div>
        </Card>
      </main>
    </div>
  </div>
  )
}

export default Dashboard
