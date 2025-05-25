'use client';
import { useIdiomaStore } from '@/store/useIdiomaStore';
import React from 'react';
import Traducao from "./traducao"
import SelecionaIdioma from './SelecionaIdioma/SelecionaIdioma';

export default function Footer() {
    const idioma = useIdiomaStore((state) => state.idioma);
    const t = Traducao[idioma];
    return (
        <footer className="bg-neutral text-neutral-content p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center w-full">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl">

                <div className="flex flex-col items-start">
                    <h3 className="text-lg font-semibold mb-4">{t.intitucional.titulo}</h3>
                    <ul className="space-y-2">
                        {t.intitucional.lista.map((item, index) =>
                            <li key={index}><a href="#" className="link link-hover text-sm">{item}</a></li>)
                        }
                    </ul>
                </div>

                <div className="flex flex-col items-start">
                    <h3 className="text-lg font-semibold mb-4">{t.catalogo.titulo}</h3>
                    <ul className="space-y-2">
                        {t.catalogo.lista.map((item, index) =>
                            <li key={index}><a href="#" className="link link-hover text-sm">{item}</a></li>)
                        }
                    </ul>
                </div>

                <div className="flex flex-col items-start">
                    <h3 className="text-lg font-semibold mb-4">{t.linhaProdutos.titulo}</h3>
                    <ul className="space-y-2">
                        {t.linhaProdutos.lista.map((item, index) =>
                            <li key={index}><a href="#" className="link link-hover text-sm">{item}</a></li>)}
                    </ul>
                </div>

                <div className="flex flex-col items-start">
                    <h3 className="text-lg font-semibold mb-4">{t.contato}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                        <img src="/icons/telefone.png" className='btn btn-circle btn-sm btn-ghost' />
                        <span className="text-sm">+ 55 48 3333 3333</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                        <img src="/icons/email.png" className='btn btn-circle btn-sm btn-ghost' />
                        <span className="text-sm">{t.email}</span>
                    </div>

                    <h3 className="text-lg font-semibold mb-4">{t.siga}</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="btn btn-circle btn-sm btn-ghost">
                            <img src="/icons/insta.png" />
                        </a>
                        <a href="#" className="btn btn-circle btn-sm btn-ghost">
                            <img src="/icons/youtube.png" />
                        </a>
                        <a href="#" className="btn btn-circle btn-sm btn-ghost">
                            <img src="/icons/facebook.png" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-neutral-content border-opacity-20 w-full max-w-7xl my-8"></div>

            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full max-w-7xl text-sm text-neutral-content">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <span>{t.selecionarIdioma}</span>
                    <SelecionaIdioma />
                </div>

                <div className="text-center md:text-right">
                    <p>{t.legal}</p>
                    <p>{t.endereco}</p>
                </div>
            </div>
        </footer>
    );
};
