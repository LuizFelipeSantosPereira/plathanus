'use client';
import { useIdiomaStore } from '@/store/useIdiomaStore';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SelecionaIdioma from '../Footer/SelecionaIdioma/SelecionaIdioma';
import Traducao from './traducao';

export default function Navbar() {
    const idioma = useIdiomaStore((state) => state.idioma);
    const t = Traducao[idioma];
    const [open, setOpen] = useState(false);

    function handleBuscar() {
        const elementoBusca = document.getElementById('busca');
        const buscaBtn = document.getElementById('buscaBtn');
        buscaBtn?.classList.toggle('hidden');
        elementoBusca?.classList.toggle('hidden');

        buscaBtn?.classList.contains('hidden') ? elementoBusca?.focus() : null;
    }

    return (
        <nav className="bg-white shadow-md sticky w-full z-50 ">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-around items-center">
                <div className="text-2xl font-bold">LOGO</div>

                <div className="hidden md:flex items-center gap-4 whitespace-nowrap">
                    {t.items.map((item) => (
                        <a key={item} href="/" className="text-gray-700 hover:text-shadow-xs hover:text-black">
                            {item}
                        </a>
                    ))}
                    <button className="rounded-full p-1 bg-white shadow text-gray-600 flex items-center justify-center" id="buscaBtn" onClick={handleBuscar}>
                        <img src="/icons/search.png" className='w-6' />

                    </button>
                    <label className="input input-primary input-sm focus:ring-none hidden " id="busca" onBlur={handleBuscar}>
                        <img src="/icons/search.png" className='w-6' />
                        <input type="search" placeholder={t.buscar} />
                    </label>
                </div>

                <div className="hidden md:flex items-center space-x-4">

                    <button className="btn btn-primary  rounded-lg px-4 py-1">
                        {t.faleConosco}
                    </button>
                    <SelecionaIdioma />
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setOpen(!open)}>
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden flex flex-col align-center bg-white px-6 pt-2 pb-4 shadow gap-2">
                    {t.items.map((item) => (
                        <a key={item} href="#" className="text-gray-700  hover:bg-gray-200 rounded-md px-4 py-2">
                            {item}
                        </a>
                    ))}
                    <button className="btn btn-primary w-full flex justify-center mt-2 rounded-full py-2">
                        {t.faleConosco}
                    </button>
                    <div className="flex justify-center items-center">
                        <SelecionaIdioma />
                    </div>
                </div>
            )}
        </nav>
    );
}
