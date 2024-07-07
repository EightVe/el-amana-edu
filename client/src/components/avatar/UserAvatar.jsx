import React from 'react'
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
  
const UserAvatar = () => {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger><Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>@Username</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default UserAvatar