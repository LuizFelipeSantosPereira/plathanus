'use client';
import Footer from "@/_components/Footer/Footer";
import Navbar from "@/_components/Navbar/Navbar";
import { useIdiomaStore } from "@/store/useIdiomaStore";
import Traducao from "./traducao";
import ProductCarousel from "@/_components/ProdutoCarousel/ProdutoCarousel";

export default function Produto({ params }: { params: { id: string } }) {
    const idioma = useIdiomaStore((state) => state.idioma);
    const t = Traducao[idioma];
    const { id } = params;
    const listaDescricao = [5, 6, 8, 6, 5, 5, 6];
    return (
        <div data-theme="orthopedic" className="min-h-screen max-w-[2560px]">
            <Navbar />
            <div >
                <div className="breadcrumbs  px-6 pt-4">
                    <ul className="text-xs">
                        <li>
                            <a className="text-gray-500" href="/">Início</a>
                        </li>
                        <li>
                            <a className="text-gray-500" href="/">Linha Orthopedic</a>
                        </li>
                        <li>
                            <span className="text-gray-800">Órtese Splint Bilateral</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col lg:flex-row p-6 gap-8">
                    <div className="flex-1">
                        <div className="border border-white p-2">
                            <img src={`/produtos/${id}.png`} alt="Produto" className="w-full object-cover rounded max-w-[360px] lg:max-w-[720px]" />
                        </div>
                        <div className="flex mt-4 gap-2 overflow-x-auto">
                            {listaDescricao.map((produto, i) => (
                                <img
                                    key={i}
                                    src={`/produtos/${produto}.png`}
                                    className="w-20 h-20 object-cover rounded border hover:border-orange-500"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 space-y-4">
                        <span className="text-xs uppercase text-gray-600">Hidrolight Neo®</span>
                        <br />
                        <p className="text-3xl font-bold bg-accent text-accent-content inline p-1 rounded">{t.produto.titulo}</p>
                        <p className="text-sm text-gray-700">
                            {t.produto.codigo}
                        </p>

                        <div className="text-sm text-gray-700 leading-relaxed mt-4">
                            <p>{t.produto.descricao}</p>
                        </div>

                        <div>
                            <span className="block text-sm font-semibold">{t.produto.nivel}</span>
                            <p className="text-gray-700">{t.produto.recuperacao}</p>
                        </div>

                        <div>
                            <div className="border border-gray-200 w-full" />
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm">{t.produto.cores}</span>
                            <div className="w-5 h-5 bg-black border border-white rounded-full"></div>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm">{t.produto.modelo}</span>
                        </div>

                        <div className="space-x-2">
                            <span className="text-sm">{t.produto.tamanhos.titulo} <span className="badge badge-ghost">{t.produto.tamanhos.unico}</span> <span className="badge badge-ghost">{t.produto.tamanhos.especial}</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <p className="text-primary flex gap-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.0607 11.6731L3.26392 4.34237M3.26392 4.34237L10.6295 4.28498M3.26392 4.34237L15.1101 15.1461" stroke="#E57200" strokeWidth="0.9375" strokeLinecap="square" stroke-linejoin="round" />
                                    <path d="M9.32804 16.1393L16.6519 16.2147M16.6519 16.2147L15.9822 8.82903M16.6519 16.2147L4.80579 5.41083" stroke="#E57200" strokeWidth="0.9375" strokeLinecap="square" stroke-linejoin="round" />
                                </svg>
                                    {t.produto.descubra}</p>
                            </div>
                            <div>
                                <p className="flex gap-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8569 7.89874C13.061 7.98249 12.8027 8.12874 12.6598 8.12958C12.5947 8.13825 12.5286 8.13094 12.467 8.10829C12.4054 8.08564 12.3503 8.04832 12.3064 7.99958C12.2625 7.95083 12.2311 7.89211 12.215 7.82851C12.1989 7.76492 12.1985 7.69835 12.2139 7.63458C12.3419 7.27416 12.946 7.12916 13.4169 7.24291C14.0956 7.40749 14.3573 7.96791 14.0994 8.40916C13.761 8.98916 12.7456 9.20749 11.9473 8.96374C10.9539 8.66083 10.5864 7.81291 11.0306 7.14833C11.5639 6.35124 12.9931 6.05999 14.1094 6.43249C15.4135 6.86791 15.8864 8.00208 15.2573 8.88499C14.5356 9.89666 12.6948 10.2608 11.2669 9.76041C9.65436 9.19583 9.07728 7.77708 9.89019 6.67999C10.7964 5.45541 13.0448 5.01916 14.781 5.64583C16.6985 6.33791 17.3789 8.03791 16.3852 9.34833C15.2964 10.7833 12.6435 11.2908 10.6019 10.5392C8.38228 9.72124 7.59894 7.74166 8.77269 6.22083C10.0423 4.57666 13.0969 3.99749 15.4406 4.87416C17.9614 5.81666 18.8469 8.07416 17.4939 9.80374C16.6335 10.9042 14.9964 11.6425 13.2039 11.7654" stroke="#121212" stroke-width="0.4375" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.2043 11.7654H1.87513V15.5333H13.2335C15.991 15.5333 18.123 13.6958 18.123 11.2945V7.99788M16.0039 14.7325V13.7908M14.591 15.2979V13.4137M13.178 15.5333V14.5916M11.7651 15.5333V13.6491M10.3526 15.5333V14.5916M8.93929 15.5333V13.6491M7.52679 15.5333V14.5916M4.70096 15.5333V14.5916M6.11346 15.5333V13.6491M3.28804 15.5333V13.6491M8.23304 11.7183V7.62122" stroke="#121212" strokeWidth="0.4375" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                    {t.produto.tabela}</p>
                            </div>

                        </div>

                        <button className="btn btn-outline mt-2">{t.produto.encontrar}</button>


                        <div className="text-xs mt-4 text-gray-500">
                            {t.produto.gostou}
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <div className="relative w-full aspect-video bg-gray-800">
                        <img src="/produtos/video.png" alt="Vídeo" className="absolute inset-0 w-full h-full object-cover" />
                        <button className="absolute left-1/2 top-1/2 m-auto bg-white text-orange-500 rounded-full px-4 py-3 text-4xl">▶</button>
                    </div>
                </div>


                <div className="p-6 bg-white text-black flex flex-col gap-6">
                    <div className="max-w-[460px]">
                        <p className="text-xl font-bold">Fabricação <span className="text-primary">própria</span> e nacional. <span className="text-primary">Qualidade</span> garantida!</p>
                        <p>Antes de utilizar o produto, leia atentamente as precauções e Instruções de uso.</p>
                    </div>
                    <div className=" min-h-[320px] max-w-[1200px] flex flex-col place-items-center lg:relative gap-4">
                        <div className="border border-dashed border-primary rounded max-w-[320px] p-4 lg:absolute lg:top-0 lg:left-0">
                            <p className="text-accent flex">Hidrolight Neo<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 0.102539C5.37615 0.102539 6.89746 1.62394 6.89746 3.5C6.89739 5.376 5.3761 6.89648 3.5 6.89648C1.6239 6.89648 0.102613 5.376 0.102539 3.5C0.102539 1.62394 1.62385 0.102539 3.5 0.102539Z" stroke="#80276C" stroke-width="0.205882" />
                                <path d="M2.58036 5V1.43636H3.91418C4.21624 1.43636 4.47588 1.48558 4.69309 1.584C4.9103 1.67903 5.07661 1.81818 5.192 2.00145C5.31079 2.18133 5.37018 2.40024 5.37018 2.65818C5.37018 2.90933 5.31079 3.12655 5.192 3.30982C5.07661 3.4897 4.9103 3.62885 4.69309 3.72727C4.47588 3.8223 4.21624 3.86982 3.91418 3.86982H2.78909L2.95709 3.69673V5H2.58036ZM5.01382 5L4.09745 3.70691H4.50473L5.42618 5H5.01382ZM2.95709 3.72727L2.78909 3.54909H3.904C4.26036 3.54909 4.53018 3.47103 4.71345 3.31491C4.90012 3.15879 4.99345 2.93988 4.99345 2.65818C4.99345 2.37309 4.90012 2.15248 4.71345 1.99636C4.53018 1.84024 4.26036 1.76218 3.904 1.76218H2.78909L2.95709 1.584V3.72727Z" fill="#80276C" />
                            </svg>
                            </p>
                            <p>Família voltada para extrair os benefícios do Neoprene. Propriedades térmicas, compressivas e elásticas: são essas três propriedades que fazem do Neoprene uma ferramenta eficaz no tratamento e prevenção de lesões, no tratamento ortopédico</p>
                        </div>
                        <img src={`/produtos/${id}.png`} alt="Benefício" className="w-64 lg:absolute lg:top-0 lg:right-4/12 " />
                        <div className="border border-dashed border-primary rounded max-w-[220px] p-4 lg:absolute lg:top-0 lg:right-0">
                            <img src="/produtos/anvisa.png" className="w-42" />
                            <p>Autorização e Cadastro de produtos para saúde na ANVISA</p>
                        </div>
                    </div>

                    <div className="text-sm">
                        <p className="mb-2">
                            <strong>Hidrolight Neo®:</strong> Fórmula voltada para extrair os benefícios do neoprene Plush, reduzindo compressões e lesões nos tecidos moles.
                        </p>
                        <p>Produto com registro ANVISA: 8.23.19-1</p>
                    </div>
                </div>

                <div className="p-6">
                    <div className="collapse collapse-arrow bg-base-100  border-y rounded-none border-gray-300">
                        <input type="checkbox" />
                        <div className="collapse-title font-medium">Detalhes</div>
                        <div className="collapse-content">
                            <p>{t.detalhes.nivel}</p>
                            <p>{t.detalhes.nome}</p>
                            <p>{t.detalhes.linha}</p>
                            <p>{t.detalhes.codigo}</p>
                            <p>{t.detalhes.familia}</p>
                            <p>{t.detalhes.modelo}</p>
                            <p>{t.detalhes.composicao}</p>
                            <p>{t.detalhes.demais}</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100  border-y rounded-none border-gray-300">
                        <input type="checkbox" />
                        <div className="collapse-title font-medium">{t.especificacoes}</div>
                        <div className="collapse-content">
                            <p></p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100  border-y rounded-none border-gray-300">
                        <input type="checkbox" />
                        <div className="collapse-title font-medium">{t.indicacoes}</div>
                        <div className="collapse-content">
                            <p></p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100  border-y rounded-none border-gray-300">
                        <input type="checkbox" />
                        <div className="collapse-title font-medium">{t.garantia}</div>
                        <div className="collapse-content">
                            <p></p>
                        </div>
                    </div>
                </div>
                <ProductCarousel />

            </div>
            <Footer />
        </div>
    );
}
