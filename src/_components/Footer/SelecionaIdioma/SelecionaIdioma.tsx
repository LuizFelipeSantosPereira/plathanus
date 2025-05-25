'use client';

import { useIdiomaStore } from '@/store/useIdiomaStore';
import { ChevronDown } from 'lucide-react';
export default function SelecionaIdioma() {
    const { idioma, setIdioma } = useIdiomaStore();
    const languages = [
        { code: 'pt', label: '🇧🇷' },
        { code: 'en', label: '🇺🇸' },
        { code: 'es', label: '🇪🇸' },
    ];

    return (
        <div className="dropdown dropdown-right" >
            <label tabIndex={0} className="btn btn-ghost text-2xl text-shadow-lg">
                {languages.find(l => l.code === idioma)?.label || idioma.toUpperCase()}
                <span className="ml-2">
                    <ChevronDown size={18} />
                </span>
            </label>
            <ul tabIndex={0} className="dropdown-content bg-gray-100 font-bold menu p-2 shadow w-20 text-2xl text-shadow-lg">
                {languages.map((lang) => (
                    <li key={lang.code}>
                        <button
                            className={idioma === lang.code ? 'active' : ''}
                            onClick={() => setIdioma(lang.code as 'en' | 'pt' | 'es')}
                        >
                            {lang.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
