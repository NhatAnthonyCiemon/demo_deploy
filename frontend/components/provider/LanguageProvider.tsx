"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
    useLayoutEffect,
} from "react";
import i18n from "@/lib/i18n";

interface LanguageContextProps {
    language: string;
    setLanguage: (lng: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
    undefined
);

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context)
        throw new Error("useLanguage must be used within LanguageProvider");
    return context;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<string>("en");
    const [mounted, setMounted] = useState(false);

    const setLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("NEXT_LOCALE", lng);
        setLanguageState(lng);
    };

    useLayoutEffect(() => {
        const stored = localStorage.getItem("NEXT_LOCALE");
        i18n.changeLanguage(stored || "vi");
        setLanguageState(stored || "vi");
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
