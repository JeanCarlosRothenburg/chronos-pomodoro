import type { EnumCycle } from '../../enums/EnumCycle'
import style from './style.module.css'

type CycleDotProps = {
    cycleType: keyof typeof EnumCycle,
    cycleDescription: string
} & React.ComponentProps<'span'>

export function CycleDot({
    cycleType,
    cycleDescription,
    ...props
}: CycleDotProps) {
    return (
        <span
            className={`${style.cycleDot} ${style[cycleType]}`}
            title={cycleDescription}
            aria-label={cycleDescription}
            {...props}
        ></span>
    )
}