import { ToastifyAdapter } from "../adapters/ToastifyAdapter"

type LimitParams = {
    initial: number
    final: number
}

export function validateNumberLimit(
    number: number,
    limit: LimitParams,
    description?: string
) {
    if ((number >= limit.initial) && (number <= limit.final)) return true

    ToastifyAdapter.error(
        `O ${description ? description : 'número'} deve estar no intervalo de ${limit.initial} a ${limit.final}!`
    )
}