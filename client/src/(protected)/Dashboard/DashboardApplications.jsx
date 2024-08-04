import axiosInstance from '@/lib/axiosInstance'; // Adjust the path as necessary
import React, { useEffect, useState, useContext } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import NavigationBarDashboard from './components/NavigationBarDashboard';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AuthContext } from '@/contexts/AuthContext';
import toast from 'react-hot-toast';
import { TriangleAlertIcon } from 'lucide-react';

const DashboardApplications = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axiosInstance.get('/application/get-all');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleStatusUpdate = async (appId, status) => {
    try {
      await axiosInstance.post('/application/update-status', { appId, status });
      setApplications(prev =>
        prev.map(app => (app._id === appId ? { ...app, appStatus: status } : app))
      );
      toast.success('Status updated successfully');
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  if (!user.isAdmin) {
    return (
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <NavigationBarDashboard />
        <div className="flex flex-col w-full gap-2 p-6">
          <div className="relative">
            <div className="p-4 text-white bg-red-500 rounded-lg">
              <h1 className="text-3xl font-semibold">Forbidden (403)</h1>
              <p>Please contact your account provider to edit your permissions.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <NavigationBarDashboard />
      <Card className="w-full border-0">
        <CardHeader>
          <CardTitle>University Applications</CardTitle>
        </CardHeader>
        <CardContent>
          {applications.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-lg font-semibold">No applications found.</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>University</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map(application => (
                  <TableRow key={application._id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div>
                          <div className="font-medium">{application.university}</div>
                          <div className="text-sm text-muted-foreground">
                            {application.userId?.firstName || "USER DELETED"} {application.userId?.lastName}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="rounded-full px-2 py-1">
                        {application.appStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {user.CanUpdateApplication ? (
                        <Select onValueChange={(value) => handleStatusUpdate(application._id, value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Update status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Pending">Pending</SelectItem>
                            <SelectItem value="Accepted">Accepted</SelectItem>
                            <SelectItem value="Rejected">Rejected</SelectItem>
                            <SelectItem value="In Process">In Process</SelectItem>
                            <SelectItem value="Awaiting Payment">Awaiting Payment</SelectItem>
                            <SelectItem value="Final Acceptance Letter">Final Acceptance Letter</SelectItem>
                            <SelectItem value="Awaiting Student Card">Awaiting Student Card</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <TriangleAlertIcon className="h-6 w-6 text-yellow-500" />
                      )}
                    </TableCell>
                    <TableCell>
                      {user.CanViewApplication ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" onClick={() => setSelectedApplication(application)}>View Details</Button>
                          </DialogTrigger>
                          <DialogContent className="w-full h-screen overflow-y-scroll">
                            <DialogHeader>
                              <DialogTitle>Application Informations</DialogTitle>
                              <DialogDescription className="flex flex-col gap-6">
                                <div>
                                  <strong>Tracking Number:</strong> {selectedApplication?.trackingNumber}
                                </div>
                                <div>
                                  <strong>Full Name:</strong> {selectedApplication?.fullName}
                                </div>
                                <div>
                                  <strong>Father's Name:</strong> {selectedApplication?.fatherName}
                                </div>
                                <div>
                                  <strong>Mother's Name:</strong> {selectedApplication?.motherName}
                                </div>
                                <div>
                                  <strong>Gender:</strong> {selectedApplication?.gender}
                                </div>
                                <div>
                                  <strong>Nation:</strong> {selectedApplication?.nation}
                                </div>
                                <div>
                                  <strong>Second Nation:</strong> {selectedApplication?.secondNation}
                                </div>
                                <div>
                                  <strong>Country:</strong> {selectedApplication?.country}
                                </div>
                                <div>
                                  <strong>Passport No:</strong> {selectedApplication?.passportNo}
                                </div>
                                <div>
                                  <strong>Phone Number:</strong> {selectedApplication?.phoneNumber}
                                </div>
                                <div>
                                  <strong>Email:</strong> {selectedApplication?.email}
                                </div>
                                <div>
                                  <strong>Department:</strong> {selectedApplication?.department}
                                </div>
                                <div>
                                  <strong>Department Language:</strong> {selectedApplication?.departmentLanguage}
                                </div>
                                <div>
                                  <strong>Student Picture:</strong> <img src={selectedApplication?.studentPicture} alt="Student" />
                                </div>
                                <div>
                                  <strong>Certificate Picture:</strong> <img src={selectedApplication?.certificatePicture} alt="Certificate" />
                                </div>
                                <div>
                                  <strong>Passport Picture:</strong> <img src={selectedApplication?.passportPicture} alt="Passport" />
                                </div>
                                <div>
                                  <strong>Transcript Picture:</strong> <img src={selectedApplication?.transcriptPicture} alt="Transcript" />
                                </div>
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <TriangleAlertIcon className="h-6 w-6 text-yellow-500" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardApplications;

function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
