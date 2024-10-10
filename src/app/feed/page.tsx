import React from "react"
import CardMain from "../components/Card"
import Layout from "../components/Layout"

const Feed = () => {
    return(
        <Layout>
            <div className="mr-12 mb-5">
                <main className="w-full flex flex-col justify-center items-center">
                    <h2 className="text-xl font-bold mb-2">Favoritos</h2>
                    <CardMain/>
                    <CardMain/>
                    <CardMain/>
                </main> 
            </div>
        </Layout>
    ) 
}

export default Feed