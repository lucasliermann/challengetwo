import Image from "next/image"

export default function Banner() {

    return (
        <div className="text-white text-5xl flex place-items-center h-screen bg-cover bg-[url(/Coca.jpg)] ">
            <div className="p-10 flex flex-col gap-6 font-medium">
                <p>Prepare-se para algo lendário </p>
                <p>#CocaColaCreations</p>
            </div>
        </div>
    )
}
