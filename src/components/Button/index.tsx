import style from './style.module.css'

type ButtonProps = {
    icon: React.ReactNode
} & React.ComponentProps<'button'>

export function Button({
    icon,
    color = 'green',
    ...props}: ButtonProps) {
    return (
        <button className={`${style.button} ${style[color]}`} {...props}>
            {icon}
        </button>
    )
}