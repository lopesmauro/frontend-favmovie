import React from "react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
import Logo from "./Logo"

const Navbar = () => {
    return ( 
        <div className="flex flex-row justify-between p-10">
            <Logo/>
            <div className="w-80 flex flex-row">
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="text" placeholder="Pesquisar" className="border-gray-800 focus:border-white"/>
                    <Button variant="ghost" type="submit">
                        <Search className="w-4 h-4" /> 
                    </Button>
                </div>
            </div>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default Navbar