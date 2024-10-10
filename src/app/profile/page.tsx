"use client"
import React from "react"
import Layout from "../components/Layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../../components/ui/button"
import CardMain from "../components/Card"

const Profile = () => {
    // Simulação de dados do usuário e filmes favoritos
    const userData = {
        name: "M. Felipe",
        username: "lopessmf",
        followers: 250,
        profileImage: "https://github.com/shadcn.png",
        favoriteMovies: [
            { title: "Interstellar", description: "Ficção científica sobre exploração espacial" },
            { title: "O Poderoso Chefão", description: "Clássico sobre a máfia italiana" },
            { title: "Clube da Luta", description: "Drama psicológico sobre dualidade" },
            // Adicione mais filmes aqui
        ],
    };

    return (
        <Layout>
            <div className="w-2/3 mx-auto">
                <div className="flex flex-col items-center mb-6">
                    <Avatar className="w-28 h-28 mb-3">
                        <AvatarImage src={userData.profileImage} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className="text-2xl font-bold text-gray-300">{userData.name}</h1>
                    <p className="text-sm text-gray-500">@{userData.username}</p>
                    <p className="text-sm text-gray-500">{userData.followers} seguidores</p>
                </div>

                <div className="w-full flex justify-center">
                    <Button variant="outline" className="text-gray-300 border-gray-700 hover:bg-zinc-900 hover:text-gray-300">
                        Seguir
                    </Button>
                </div>

                <div className="w-full mb-6">
                    <h2 className="text-xl font-bold text-gray-300 mb-4">Filmes Favoritos</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {/* Mapeamento dos filmes favoritos */}
                        {userData.favoriteMovies.map((movie, index) => (
                            <h1>Ex</h1>
                        ))}
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Profile;
