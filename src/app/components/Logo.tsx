import { Great_Vibes } from 'next/font/google'
//Não esta funcionando
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
});

const Logo = () => {
    return(
        <h1 className={`${greatVibes.className} text-3xl font-black`}>FavMovie✨</h1>
    )
}

export default Logo