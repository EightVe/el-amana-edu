import React, { useEffect, useState, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trash2, Monitor } from 'lucide-react';
import { AuthContext } from '@/contexts/AuthContext';
import axiosInstance from '@/lib/axiosInstance';
import { LoadingSpinner } from '@/lib/LoadingSpinner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from '@/components/ui/separator';


const AccountSessions = () => {
  const { user } = useContext(AuthContext);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axiosInstance.get('/sessions');
        setSessions(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching sessions:', error);
        setLoading(false);
      }
    };

    if (user) fetchSessions();
  }, [user]);

  const handleDelete = async (sessionId) => {
    setDeleting(true);
    try {
      await axiosInstance.post('/sessions/delete', { sessionId });
      setSessions(sessions.filter(session => session._id !== sessionId));
      setDeleting(false);
    } catch (error) {
      console.error('Error deleting session:', error);
      setDeleting(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sessions.map((session) => (
        <Card key={session._id} className={`p-6 ${session.isCurrent ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'}`}>
          <div className="flex items-start space-x-4">
            <Monitor className={`w-8 h-8 ${session.isCurrent ? 'text-blue-600' : 'text-gray-600'}`} />
            <div>
              <h3 className={`text-base font-semibold ${session.isCurrent ? 'text-blue-600' : ''}`}>{session.isCurrent ? 'Current Session' : ''}</h3>
              <h3 className="text-sm font-semibold">{new Date(session.createdAt).toLocaleString()}</h3>
              <p className="text-xs text-gray-600">{session.userAgent}</p>
              <Separator className="mt-1"/>
              <p className="text-xs pt-1">{session.city}, {session.country}</p>
              <p className="text-xs">IP Address : {session.ip}</p>
              <p className="text-xs">{session.network} | ({session.version}) | {session.org}</p>
            </div>
          </div>
          {!session.isCurrent && (
            <div className="w-full flex justify-end">
              <Button variant="outline" size="sm" className="mt-4 flex items-center gap-1" onClick={() => handleDelete(session._id)}>
              {deleting ? (
                  <LoadingSpinner className="h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4" />
                )}
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default AccountSessions;
