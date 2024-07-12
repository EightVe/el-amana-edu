import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { AuthContext } from '@/contexts/AuthContext';
import UserAvatar from '../avatar/UserAvatar';
import { LoadingSpinner } from '@/lib/LoadingSpinner';

const NavigationBar = () => {
    const { user, loading } = useContext(AuthContext);

    return (
        <nav className="inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">
                    <Link to="/" className="flex items-center">
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <nav className="hidden md:flex gap-4">
                        <Link
                            to="/"
                            className="font-medium flex items-center text-sm transition-colors hover:underline"
                        >
                            Home
                        </Link>
                        <Link
                            to="#"
                            className="font-medium flex items-center text-sm transition-colors hover:underline"
                        >
                            About
                        </Link>
                        <Link
                            to="#"
                            className="font-medium flex items-center text-sm transition-colors hover:underline"
                        >
                            Services
                        </Link>
                        <Link
                            to="#"
                            className="font-medium flex items-center text-sm transition-colors hover:underline"
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        {loading ? (
                            <LoadingSpinner className="h-3 w-3 animate-spin" />
                        ) : user ? (
                            <UserAvatar />
                        ) : (
                            <>
                                <Button variant="outline" size="sm">
                                    Sign in
                                </Button>
                                <Button size="sm">Sign up</Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;
