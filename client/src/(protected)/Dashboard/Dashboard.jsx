import axiosInstance from '@/lib/axiosInstance';
import React, { useEffect, useState, useContext } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import NavigationBarDashboard from './components/NavigationBarDashboard';
import { AuthContext } from '@/contexts/AuthContext';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [totalApplications, setTotalApplications] = useState(0);
  const [applicationDetails, setApplicationDetails] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [userDetails, setUserDetails] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const appResponse = await axiosInstance.get('/application/fetchapp-statistics');
        setTotalApplications(appResponse.data.totalApplications);
        setApplicationDetails(appResponse.data.statusCount);

        const userResponse = await axiosInstance.get('/application/fetchuser-statistics');
        setTotalUsers(userResponse.data.totalUsers);
      } catch (error) {
        console.error('Error fetching statistics:', error);
        toast.error('Failed to fetch statistics');
      }
    };

    fetchStatistics();
  }, []);

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
                  <div className="text-4xl font-bold">{totalApplications}</div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="ml-auto">
                        View details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Application Status Details</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        {applicationDetails.map(detail => (
                          <div key={detail._id} className="flex justify-between">
                            <span>{detail._id}</span>
                            <span>{detail.count}</span>
                          </div>
                        ))}
                      </div>
                      <DialogFooter>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Total Users</CardTitle>
                  <CardDescription>View Users Details</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center">
                  <div className="text-4xl font-bold">{totalUsers}</div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="ml-auto">
                        View details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>User Details</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="flex justify-between">
                          <span>Total Users</span>
                          <span>{totalUsers}</span>
                        </div>
                      </div>
                      <DialogFooter>

                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
};

export default Dashboard;
