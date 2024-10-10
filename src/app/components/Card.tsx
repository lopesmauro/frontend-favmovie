import React from "react"
import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"


const CardMain = () => {
  return (
    <Card className="w-[500px] border-gray-700 bg-transparent mt-5 mb-5">
      <CardHeader>
        <CardTitle className="text-gray-300">Movie name</CardTitle>
        <CardDescription>Write your description here.</CardDescription>
      </CardHeader>
      <CardContent className="h-[100px]">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Name of your project" className="border-gray-800 focus:border-white" autoComplete="off"/>
            </div>
            <div className="flex flex-col space-y-1.5">
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="text-gray-300 border-gray-700 hover:bg-zinc-900 hover:text-gray-300">Cancelar</Button>
        <Button variant="secondary" className="text-gray-300 bg-sky-700 hover:bg-sky-900 hover:text-gray-300">Curtir</Button>
      </CardFooter>
    </Card>
  )
}

export default CardMain