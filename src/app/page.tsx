import Image from 'next/image'
import Header from './components/header'
import Banner from './components/banner'
import Card from './components/card'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Card
        title='Está sem coca na geladeira?'
        text='Opa, abriu a geladeira e tá sem Coca? Não se preocupe! Peça seu produto Coca‑Cola no Na Sua Casa e receba suas bebidas favoritas no dia seguinte!*'
        image='/home.png'
        link='oi'
      /><Card
        title='Confira o que está rolando na sua região'
        text='Veja as regiões no link abaixo'
        image='/zero.png'
        link='veja aqui'
      /><Card
        title='Coca Zero?'
        text=''
        image='/zero.png'
        link='compre agora'
      />
      <Footer/>
      
    </>
    


  )
}
