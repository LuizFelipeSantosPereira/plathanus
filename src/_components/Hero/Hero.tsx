'use client';
import Image from 'next/image';
import { useIdiomaStore } from '@/store/useIdiomaStore';
import Traducao from './taducao';
import Link from 'next/link';
export default function OrthopedicBanner() {
    const idioma = useIdiomaStore((state) => state.idioma);
    const t = Traducao[idioma];

    return (
        <div className="relative w-full h-[600px] md:h-[700px] flex flex-col pt-8 pl-4 sm:pl-18 pr-12 bg-gradient-to-r from-white to-transparent">

            <Image
                src="/produtos/hero.png"
                alt="Orthopedic banner"
                fill
                className="object-cover object-center"
                priority
            />
            <div className=" z-20 aling-self-center text-gray-500 mb-4">
                <Link className='link link-hover' href="#">{t.inicio}</Link> <span className="mx-1">{'>'}</span> <Link href="#" className="link link-hover">{t.listaOrthopedic}</Link>
            </div>
            <div className="relative z-20 aling-self-center mt-[108px] max-w-5xl">
                <p className="text-xl text-gray-500 uppercase tracking-[12px]">{t.linha}</p>
                <Image alt='' className='-mt-5' src="/icons/orthopedic.png" />
                <p className="mt-6 text-xl max-w-xl text-black">
                    {t.descricao}
                </p>
            </div>
        </div>
    );
}
