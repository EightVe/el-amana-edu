import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Trash2, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountSessions = () => {
  return (
    <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card className="p-6 bg-blue-100 border border-blue-300">
        <div className="flex items-start space-x-4">
          <Monitor className="w-8 h-8 text-blue-600" />
          <div className="">
            <h3 className="text-base font-semibold text-blue-600">Current Session</h3>
            <h3 className="text-sm font-semibold">14/12/2024 | 6:28:14 AM</h3>
            <p className="text-xs text-gray-600">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36</p>
          </div>
        </div>
      </Card>
      <Card className="p-6 bg-white border border-gray-200 shadow-sm">
        <div className="flex items-start space-x-4">
          <Monitor className="w-8 h-8 text-gray-600" />
          <div className="">
            <h3 className="text-sm font-semibold">14/12/2024 | 6:28:14 AM</h3>
            <p className="text-xs text-gray-600">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36</p>
          </div>
        </div>
        <div className='w-full flex justify-end'>
        <Button variant="outline" size="sm" className="mt-4 flex items-center gap-1">
          <Trash2 className="h-4 w-4" />
        </Button>
        </div>
      </Card>
    </div>
  );
}

export default AccountSessions;
