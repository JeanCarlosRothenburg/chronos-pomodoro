import style from './style.module.css'
import { RouterLink } from '../../adapters/ReactRouterLinkAdapter'

export function Footer() {
    return (
        <footer className={style.footer}>
            <RouterLink href="/about-pomodoro">Entenda como funciona a Técnica de Pomodoro</RouterLink>
            <RouterLink href="">Chronos Pomodoro &copy; { new Date().getFullYear() }</RouterLink>
        </footer>
    )
}