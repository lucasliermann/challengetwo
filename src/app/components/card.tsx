import { SiCocacola } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

interface PropsCard {
    title: string,
    text: string,
    link: string,
    image: string


}

export default function Card(props:PropsCard) {
//<SiCocacola className='h-32 w-32 text-red-600'/>//
return (
    <>
     <section className="flex">   
        <div className="flex text-3xl w-[50%] items-center gap-4 p-28 h-[750px]  justify-center flex-col bg-gradient-to-tr from-white to-red-600">
            <div>
                <span className="flex items-center gap-3 font-bold text">{props.title}</span>
            </div>
            <div>
                <p className="font-serif">{props.text} </p>
            </div>
            <Link className='border p-2 border-red-600 rounded-lg hover:bg-red-700 bg-white hover:transition hover:text-stone-50 ' href="https://andina.nasuacasa.coca-cola.com.br/?utm_source=web_o&utm_medium=OWeb&utm_campaign=homecc&utm_term=wpp&utm_content=link-home&_gl=1*1khwokk*_ga*MTc4Njc3OTMzMS4xNjk1NDAxNzMz*_ga_PGYS4V238B*MTY5NTc0NTgzMy41LjAuMTY5NTc0NTgzMy42MC4wLjA.">{props.link}</Link>
        </div>
        <Image className="pl-14 bg-gradient-to-tl from-yellow-400 to-red-600 w-[50%]"
            src={props.image}
            width={"700"}
            height={"700"}
            alt=""
        />
     </section>
     

        
    </>  
)
}