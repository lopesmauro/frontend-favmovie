"use client";
import React from "react";
import Layout from "../components/Layout";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Exit = () => {
    return (
        <Layout>
            <div className="w-3/4">
                <h1 className="text-center text-2xl font-bold mb-10">Sair da Conta</h1>
                <div className="p-6 flex flex-col items-center">
                    <Avatar className="mb-4">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-gray-500 mb-6">lopessmf (M. Felipe)</p>
                    <p className="text-center text-gray-300 mb-4">
                        Tem certeza que deseja sair da sua conta?
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="outline" className="text-gray-300 border-gray-700 hover:bg-zinc-900 hover:text-gray-300">
                            Cancelar
                        </Button>
                        <Button variant="destructive" className="text-gray-300 border-red-700 hover:bg-red-800">
                            Sair
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Exit
