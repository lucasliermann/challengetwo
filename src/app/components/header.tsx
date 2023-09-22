import { SiCocacola } from 'react-icons/si' 
import { GoPersonFill } from 'react-icons/go'
import Link from 'next/link'

export default function Header() 
{
    return (
        <header className='h-20 bg-black text-white flex justify-around items-center font-medium fixed w-full'>
            <div >
                <SiCocacola className='h-24 w-24 m-8'/> 
            </div>
            <nav className='flex gap-8 w-[80%]'>
                <Link href="">Ofertas</Link>
                <Link href="">Promoções</Link>
                <Link href="">Dá o play</Link>
                <Link href="">Retornáveis</Link>
                <Link href="">Loja</Link>
            </nav>
            <div className='pr-16'>
                <a className= 'border px-8 py-3 rounded-full flex items-center gap-2' href=""><GoPersonFill/>  Entrar</a>
            </div>
        </header>
    )
}