'use client';
import { useIdiomaStore } from '@/store/useIdiomaStore';
import { useState } from 'react';
import Traducao from './traducao';

export default function Produtos() {
    const idioma = useIdiomaStore((state) => state.idioma);
    const t = Traducao[idioma];
    const [open, setOpen] = useState(false);
    const lista = [1, 2, 3, 4, 1, 2, 4, 1, 2]
    return (
        <div className="flex flex-col sm:flex-row sm:px-18 mt-8">
            <aside className="px-4 w-full sm:w-58 sm:px-0">
                <div className='border border-gray-200 mb-4 rounded-lg'>
                    <div className="text-lg">
                        <p className='collapse-title'>Filtros</p>
                    </div>
                    <div className="collapse collapse-arrow bg-gray-100 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title font-medium">Lançamentos</div>
                    </div>
                    <div className="collapse collapse-arrow bg-gray-100 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title font-medium">Famílias/Tecnologias</div>
                    </div>
                    <div className="collapse collapse-arrow bg-gray-100 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title font-medium">Produtos</div>
                    </div>
                </div>

            </aside>

            <div className="flex-1 p-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-4">
                        <span className="text-sm font-medium p-2 bg-gray-100 rounded-full">86 produtos</span>
                        <button className="rounded-full p-2 bg-gray-100 flex items-center justify-center">
                            <img src="/icons/search.png" className='w-4' />
                        </button>
                    </div>

                    <div className="flex gap-2 items-center">

                        <button className="btn btn-primary btn-sm text-primary-content">
                            Baixar Catálogo
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_424)">
                                    <path d="M2.6665 10.654V12.1905C2.6665 12.598 2.8041 12.9888 3.04902 13.277C3.29394 13.5651 3.62613 13.727 3.9725 13.727H11.8085C12.1548 13.727 12.487 13.5651 12.7319 13.277C12.9769 12.9888 13.1145 12.598 13.1145 12.1905V10.654M4.73462 6.81274L7.99961 10.654M7.99961 10.654L11.2646 6.81274M7.99961 10.654V1.43496" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_424">
                                        <rect width="13.3328" height="14.6667" fill="white" transform="translate(1.33325 0.666748)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
                    {lista.map((produto, index) => (
                        <div key={index} className="space-y-2 flex flex-col">
                            <a href={`/${produto}`}>
                                <div className="relative w-full aspect-3/2 sm:aspect-[3/4]  rounded overflow-hidden">
                                    <img
                                        src={`/produtos/${produto}.png`}
                                        alt="Produto"
                                        className="w-full h-full object-cover rounded-lg border border-gray-200"
                                    />
                                    {(index === 1 || index === 3 || index === 6) && (
                                        <span className="absolute top-2 left-2 bg-accent text-accent-content text-xs font-semibold px-2 py-1 rounded">
                                            Lançamento
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <p className="text-sm">Órtese {index % 2 === 0 ? 'Soft Curta com Polegar' : 'Soft Curta sem Polegar'}</p>
                                    <p className="text-xs text-gray-500">
                                        Cód. Produto <strong>{index % 3 === 0 ? 'OR1051' : 'OR1065'}</strong>
                                    </p>
                                </div>
                            </a>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
