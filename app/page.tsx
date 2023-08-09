import Image from "next/image";
import Hero from "@/components/hero";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="max-w-big m-auto pt-60 pb-12">
                <h1 className="font-bighead uppercase text-center italic">
                    <span className="text-3xl md:text-6xl block leading-neg">Become A</span>
                    <span className="text-6xl md:text-8xl block leading-neg">Sub-MOA</span>
                    <span className="text-7xl md:text-9xl block leading-neg">Spoonie</span>
                </h1>
                <span className="text-3xl lg:text-6xl font-bighead uppercase leading-neg text-center block italic">Precision, Pain & Pride</span>
            </div>
        </>
    );
}