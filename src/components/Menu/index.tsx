import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { RouterLink } from "../../adapters/ReactRouterLinkAdapter";

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
        <nav className={style.nav}>
            <ul>
                <li>
                    <RouterLink className="teste" href="/" aria-label="Página Inicial" title="Página Inicial">
                        <HouseIcon />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink href="/history" aria-label="Histórico" title="Histórico">
                        <HistoryIcon />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink href="/settings" aria-label="Configurações" title="Configurações">
                        <SettingsIcon />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink href="#" onClick={handleThemeChange} aria-label="Cor do Tema" title="Cor do Tema">
                        { themeIcons[theme] }
                    </RouterLink>
                </li>
            </ul>
        </nav>
    )
}