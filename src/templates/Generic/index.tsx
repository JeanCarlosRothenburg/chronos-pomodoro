import style from './style.module.css'

type GenericProps = {
    children: React.ReactNode
}

export function Generic({children}: GenericProps) {
    return <div className={style.generic}>
        { children }
    </div>
}