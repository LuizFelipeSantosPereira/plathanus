'use client';
import { useIdiomaStore } from '@/store/useIdiomaStore';
import { useState } from 'react';
import Traducao from './traducao';

export default function Familias() {
    const idioma = useIdiomaStore((state) => state.idioma);
    const t = Traducao[idioma];
    const familiaProdutos = ["Hidrolight Neo", "Comfort Air", "Ortho Recovery", "Air Flex", "Softline", "Foot Care", "Lean"]

    return (
        <div className='pl-4 sm:pl-18 flex flex-col gap-8 mt-8'>
            <div className='max-w-[480px]'>
                <p className='text-3xl font-medium text-neutral'>{t.conheca.comeco}<span className='text-accent font-bold'>{t.conheca.enfase}</span>{t.conheca.fim}</p>
            </div>
            <ul className='flex gap-2 flex-wrap'>
                {familiaProdutos.map((produto, index) => (
                    <li key={index} className='text-lg font-medium mt-2'>
                        <button className={`btn btn-sm ${index == 0 ? "btn-accent text-accent-content" : "text-accent"} `}>{produto}</button>
                    </li>
                ))}
            </ul>
            <div className='max-w-[480px]'>
                <p className='text-neutral'>{t.descricao.comeco}<br /> <span className='text-black'>{t.descricao.enfase}</span> {t.descricao.fim}</p>
            </div>

        </div>

    );
}
