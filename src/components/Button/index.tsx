import style from './style.module.css'

type ButtonProps = {
    icon: React.ReactNode
} & React.ComponentProps<'button'>

export function Button({icon, ...props}: ButtonProps) {
    return (
    <button className={style.button} {...props}>
        {icon}
    </button>
    )
}