import React from "react"
import Form from "../components/Form"
import Logo from "../components/Logo"

const Login = () => {
    return (
        <div>
            <div className="p-10">
                <Logo/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white mb-6">Entre ou crie sua Conta.</h1>
                <div className="flex border border-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full">
                    <Form
                        title="Login"
                        buttonText="Entrar"
                        emailPlaceholder="Email"
                        passwordPlaceholder="Senha"
                    />
                    <Form
                        title="Criar Conta"
                        buttonText="Criar conta"
                        emailPlaceholder="Email"
                        passwordPlaceholder="Senha"
                    />
                </div>
            </div>
        </div>
    )
}

export default Login
