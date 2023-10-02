import Link from 'next/link'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {SiYoutubemusic} from 'react-icons/si'

export default function Footer() {

    return (
        <>
        <footer className='bg-black text-white flex justify-around pr-8 pl-8 items-center h-[400px] text-2xl'>
            <nav className='flex flex-col'>
                <h1 className='font-bold'>Navegue por aqui</h1>
                <Link href=''>Ofertas</Link>
                <Link href=''>Retornáveis</Link>
                <Link href=''>Aumenta o volume</Link>
                <Link href=''>Ifood</Link>
            </nav>
            <nav className='flex flex-col'>
                <h1 className='font-bold'>Institucional</h1>
                <Link href=''>Ofertas</Link>
                <Link href=''>Retornáveis</Link>
                <Link href=''>Aumenta o volume</Link>
                <Link href=''>Ifood</Link>
            </nav>
            <div className='flex gap-4'>
                <BsFacebook/>
                <AiFillTwitterCircle/>
                <SiYoutubemusic/>
            </div>
        </footer>
        <div className='bg-gradient-to-b from-black to-zinc-800'>
            <p className=' text-red-600 p-5 font-semibold'>Imagens meramente ilustrativas. É permitido um cadastro por CPF. Os itens, quantidades, prazos de validade e disponibilidade dos benefícios, pontos e/ou ofertas podem variar nas diversas regiões e poderão ser limitados por CPF, por dia, por período, por oferta, por Posto de Troca ou parceiro ou pela combinação de um ou mais destes parâmetros, a critério da COCA‑COLA. Os prazos de validade dos benefícios, pontos e/ou ofertas podem variar regionalmente de acordo com as regras de troca de cada ação. Atividades promocionais regularizadas em acordo com a Lei nº 5.768/1971 conterão Regulamentos específicos. Para mais informações, acesse o Regulamento e as Perguntas Frequentes. Canal para CRC 4002‑2121 (tarifa local).</p>
            <p className='text-red-600 p-5 font-bold flex justify-center'> © 2023 The Coca‑Cola Company, all rights reserved</p>   
        </div>
        
       </> 
    )
}