"use client"
import React from "react"
import Layout from "../components/Layout"
import { Input } from "@/components/ui/input"
import { Button } from "../../components/ui/button"
import { IMaskInput } from "react-imask"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Settings = () => {
    return(
        <Layout>
            <div className="w-2/3">
                <h1 className="text-center">Configurações</h1>
                <div className="mt-4">
                    <div className="mb-4 p-4 bg-zinc-900 rounded-[20px] flex flex-row justify-between items-center">
                        <div className="flex flex-row">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="ml-3">
                                <h1>lopessmf</h1>
                                <p className="text-sm text-gray-500">M. Felipe</p>
                            </div>
                        </div>
                        <div className="mr-3">
                            <Button variant="outline" className="text-gray-300 border-gray-700 hover:bg-zinc-800 hover:text-gray-300">Alterar foto</Button>
                        </div>
                    </div>
                    <div className="mb-4">    
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="bio">Bio</label>
                        <Input type="bio" className="border-gray-800 focus:border-white" placeholder={""} id="bio" autoComplete="off"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="gender">Gênero</label>
                        <Select>
                            <SelectTrigger className="w-full border-gray-800 focus:border-white text-gray-300">
                                <SelectValue placeholder="Gênero" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-950 border border-gray-800 text-gray-300">
                            <SelectGroup>
                                    <SelectItem className="focus:bg-zinc-900 focus:text-gray-300" value="apple">Masculino</SelectItem>
                                    <SelectItem className="focus:bg-zinc-900 focus:text-gray-300" value="banana">Feminino</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <p className="text-xs text-gray-600 mt-2">
                            Isso não fará parte do seu perfil público.
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="date">Data de nascimento</label>
                        <IMaskInput
                            mask="00/00/0000"
                            className="text-sm p-2 border rounded-md border-gray-800 focus:border-white transition-colors duration-100 w-full bg-transparent" 
                        />
                    </div>
                    <div className="w-full flex justify-end">
                        <Button variant="outline" className="text-gray-300 border-gray-700 hover:bg-zinc-900 hover:text-gray-300">
                            Enviar
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    ) 
}
    
export default Settings