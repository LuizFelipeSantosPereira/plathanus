'use client';

import Image from 'next/image';
import { useRef } from 'react';

const listaProdutos = [1, 2, 3, 4, 1, 2, 4, 1, 2];

export default function ProductCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -400 : 400,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="px-6 py-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Conheça também <br /> nossos outros produtos
            </h2>

            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="btn btn-circle absolute left-0 top-1/2 z-10 bg-white shadow"
                >
                    ❮
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
                >
                    {listaProdutos.map((produto, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] bg-white rounded-box shadow p-4"
                        >
                            <a href={`/${produto}`}>
                                <div className="relative">
                                    {produto % 2 == 0 && (
                                        <span className="absolute top-2 left-2 bg-accent text-accent-content px-2 py-1 text-sm rounded">
                                            Lançamento
                                        </span>
                                    )}
                                    <Image
                                        src={`/produtos/${produto}.png`}
                                        alt="produto"
                                        width={300}
                                        height={300}
                                        className="rounded-md object-cover"
                                    />
                                </div>
                                <h3 className="mt-4 font-medium text-gray-800">{produto % 3 == 0 ? "Órtese Safe Air" : produto % 2 == 0 ? "Órtese Soft Curta sem Polegar" : "Órtese Soft Curta com Polegar"}</h3>
                                <p className="text-sm text-gray-600">
                                    <strong>Código SKU: {produto % 3 == 0 ? "OR1065 / OR1065" : produto % 2 == 0 ? "OR1066" : "OR1012"}</strong>
                                </p>
                            </a>

                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="btn btn-circle absolute right-0 top-1/2 z-10 bg-white shadow"
                >
                    ❯
                </button>
            </div>
        </div>
    );
}
