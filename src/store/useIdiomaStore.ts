import { create } from 'zustand';

type Idioma = 'pt' | 'en' | 'es';

interface IdiomaEstado {
    idioma: Idioma;
    setIdioma: (idioma: Idioma) => void;
}

export const useIdiomaStore = create<IdiomaEstado>((set) => ({
    idioma: 'pt',
    setIdioma: (idioma) => set({ idioma: idioma }),
}));
