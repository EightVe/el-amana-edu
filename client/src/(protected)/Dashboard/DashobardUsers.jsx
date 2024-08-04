import axiosInstance from '@/lib/axiosInstance'; // Adjust the path as necessary
import React, { useContext, useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import NavigationBarDashboard from './components/NavigationBarDashboard';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AuthContext } from '@/contexts/AuthContext';
import toast from 'react-hot-toast';
import { TriangleAlertIcon } from 'lucide-react';

const DashobardUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/user/get-all');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleTogglePermission = (permission) => {
    setSelectedUser((prevUser) => ({
      ...prevUser,
      [permission]: !prevUser[permission],
    }));
  };

  const handleUpdateRolesAndPermissions = async () => {
    try {
      const response = await axiosInstance.post('/user/update-roles-permissions', {
        userId: selectedUser._id,
        isAdmin: selectedUser.isAdmin,
        permissions: {
          CanUpdateApplication: selectedUser.CanUpdateApplication,
          CanAccessUsers: selectedUser.CanAccessUsers,
          CanViewUsersDetails: selectedUser.CanViewUsersDetails,
          CanChangeUsersRoles: selectedUser.CanChangeUsersRoles,
          CanViewApplication: selectedUser.CanViewApplication,
        },
      });
      setSelectedUser(response.data.user);
      window.location.reload();
      toast.success("Success!");
    } catch (error) {
      console.error('Error updating roles and permissions:', error);
    }
  };

  const filteredUsers = users.filter(user => user.emailAddress?.toLowerCase().includes(search.toLowerCase()));

  if (!user.CanAccessUsers) {
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
      <div className="flex flex-col w-full gap-2 p-6">
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input type="search" placeholder="Search By Email..." className="pl-8 w-full md:w-[400px]" value={search} onChange={handleSearch} />
        </div>
        <div className="overflow-auto border rounded-lg shadow-sm max-w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Username</TableHead>
                <TableHead className="w-[100px]">Role</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map(userItem => (
                <TableRow key={userItem._id}>
                  <TableCell className="font-medium">{userItem.firstName} {userItem.lastName}</TableCell>
                  <TableCell>{userItem.emailAddress}</TableCell>
                  <TableCell>@{userItem.username}</TableCell>
                  <TableCell>{userItem.isAdmin ? 'Admin' : 'User'}</TableCell>
                  <TableCell className="flex gap-2">
                    {user.CanViewUsersDetails ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" onClick={() => handleUserSelect(userItem)} size="sm">Details</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>User Details</DialogTitle>
                            <DialogDescription>
                              Details of {selectedUser?.firstName} {selectedUser?.lastName}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div>
                              <strong>Username:</strong> {selectedUser?.username}
                            </div>
                            <div>
                              <strong>Email:</strong> {selectedUser?.emailAddress}
                            </div>
                            <div>
                              <strong>Phone Number:</strong> {selectedUser?.phoneNumber || 'N/A'}
                            </div>
                            <div>
                              <strong>Bio:</strong> {selectedUser?.bio || 'N/A'}
                            </div>
                            <div>
                              <strong>Location:</strong> {selectedUser?.city}, {selectedUser?.country}
                            </div>
                            <div>
                              <strong>IP Address:</strong> {selectedUser?.ip}
                            </div>
                            <div>
                              <strong>Organization:</strong> {selectedUser?.org || 'N/A'}
                            </div>
                            <div>
                              <strong>Postal Code:</strong> {selectedUser?.postal || 'N/A'}
                            </div>
                            <div>
                              <strong>Network:</strong> {selectedUser?.network || 'N/A'}
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline" onClick={() => setSelectedUser(null)}>Close</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <TriangleAlertIcon className="h-6 w-6 text-yellow-500" />
                    )}
                    {user.CanChangeUsersRoles ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" onClick={() => handleUserSelect(userItem)} size="sm">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Edit Permissions</DialogTitle>
                            <DialogDescription className="flex flex-col justify-center gap-4 py-3">
                              <div>
                                <strong>Role:</strong>
                                <select
                                  value={selectedUser?.isAdmin ? 'Admin' : 'User'}
                                  onChange={(e) => setSelectedUser(prev => ({ ...prev, isAdmin: e.target.value === 'Admin' }))}
                                >
                                  <option value="User">User</option>
                                  <option value="Admin">Admin</option>
                                </select>
                              </div>
                              {selectedUser?.isAdmin && (
                                <div className='flex flex-col gap-2'>
                                  <strong>Permissions:</strong>
                                  {Object.keys(selectedUser).filter(permission => permission.startsWith('Can')).map((permission) => (
                                    <div key={permission} className="flex items-center justify-between">
                                      <span>{permission}</span>
                                      <div 
                                        className={`relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-gray-200 rounded-full ${selectedUser[permission] ? 'bg-green-500' : ''}`}
                                        onClick={() => handleTogglePermission(permission)}
                                      >
                                        <span 
                                          className={`absolute left-0 w-6 h-6 transition-transform transform bg-white rounded-full shadow ${selectedUser[permission] ? 'translate-x-6' : ''}`}
                                        ></span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button variant="outline" onClick={handleUpdateRolesAndPermissions}>Update</Button>
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
        </div>
      </div>
    </div>
  );
};

export default DashobardUsers;

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
