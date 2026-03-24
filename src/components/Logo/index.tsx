import { TimerIcon } from "lucide-react";

import style from './style.module.css'
import { RouterLink } from "../../adapters/ReactRouterLinkAdapter";

export function Logo() {
    return (
        <RouterLink className={style.logoLink} href="/">
            <TimerIcon />
            <span>Chronos</span>
        </RouterLink>
    )
}