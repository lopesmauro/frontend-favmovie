import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface FormProps {
    title: string;
    buttonText: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
}

const Form = ({
    title,
    buttonText,
    emailPlaceholder,
    passwordPlaceholder
}: FormProps) => {
    return (
        <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <Input type="email" className="border-gray-800 focus:border-white" placeholder={emailPlaceholder} id="email" autoComplete="off"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                        Senha
                    </label>
                    <Input type="password" className="border-gray-800 focus:border-white" placeholder={passwordPlaceholder} id="password" autoComplete="off"/>
                </div>
                <div className="flex items-center justify-between">
                    <Button variant="outline" className="text-gray-300 border-gray-700 hover:bg-zinc-900 hover:text-gray-300">{buttonText}</Button>
                </div>
            </form>
        </div>
    );
};

export default Form;
