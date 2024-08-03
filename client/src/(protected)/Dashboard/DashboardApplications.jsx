import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import NavigationBarDashboard from './components/NavigationBarDashboard'
const DashboardApplications = () => {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <NavigationBarDashboard />
      <Card className="w-full border-0">
      <CardHeader>
        <CardTitle>University Applications</CardTitle>
        <CardDescription>Manage your university applications.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>University</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="University Logo"
                    className="rounded-md"
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  />
                  <div>
                    <div className="font-medium">Harvard University</div>
                    <div className="text-sm text-muted-foreground">Cambridge, MA</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="rounded-full px-2 py-1">
                  Pending
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Update status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="University Logo"
                    className="rounded-md"
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  />
                  <div>
                    <div className="font-medium">Stanford University</div>
                    <div className="text-sm text-muted-foreground">Stanford, CA</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="rounded-full px-2 py-1">
                  Accepted
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Update status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="University Logo"
                    className="rounded-md"
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  />
                  <div>
                    <div className="font-medium">University of California, Berkeley</div>
                    <div className="text-sm text-muted-foreground">Berkeley, CA</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="rounded-full px-2 py-1">
                  Rejected
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Update status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    alt="University Logo"
                    className="rounded-md"
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  />
                  <div>
                    <div className="font-medium">Massachusetts Institute of Technology (MIT)</div>
                    <div className="text-sm text-muted-foreground">Cambridge, MA</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="rounded-full px-2 py-1">
                  Pending
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Update status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  </div>
  )
}

export default DashboardApplications
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
    )
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
    )
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
    )
  }
