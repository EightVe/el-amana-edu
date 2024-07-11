import React, { useContext } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Settings from '@/(protected)/Settings/Settings'
import { AuthContext } from '@/contexts/AuthContext'
import { Link } from 'react-router-dom'
import CustomLink from '@/hooks/CustomLink'
  
const UserAvatar = () => {
  const {user} = useContext(AuthContext)
  return (
    <DropdownMenu>
  <DropdownMenuTrigger><Avatar>
  <AvatarImage src={user?.avatar} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>@Username</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <Link to="/settings">Settings LINK</Link>
    <CustomLink to="/settings">Settings CUSTOM</CustomLink>
  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default UserAvatar