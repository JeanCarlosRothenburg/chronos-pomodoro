import style from './style.module.css'

export function Footer() {
    return (
        <footer className={style.footer}>
            <a href="">Entenda como funciona a Técnica de Pomodoro</a>
            <a href="">Chronos Pomodoro &copy; { new Date().getFullYear() }</a>
        </footer>
    )
}