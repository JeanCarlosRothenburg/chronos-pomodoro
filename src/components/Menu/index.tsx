import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

import style from './style.module.css'

type AvailableThemes = 'dark'| 'light'

export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>(() => {
        return localStorage.getItem('theme') as AvailableThemes || 'dark'
    })

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        event.preventDefault()
        setTheme(prevTheme => {
            return prevTheme === 'dark' ? 'light' : 'dark'
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const themeIcons = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    return (
        <nav>
            <ul>
                <li>
                    <a className="teste" href="" aria-label="Página Inicial" title="Página Inicial">
                        <HouseIcon />
                    </a>
                </li>
                <li>
                    <a href="" aria-label="Histórico" title="Histórico">
                        <HistoryIcon />
                    </a>
                </li>
                <li>
                    <a href="" aria-label="Configurações" title="Configurações">
                        <SettingsIcon />
                    </a>
                </li>
                <li>
                    <a href="#" onClick={handleThemeChange} aria-label="Cor do Tema" title="Cor do Tema">
                        { themeIcons[theme] }
                    </a>
                </li>
            </ul>
        </nav>
    )
}