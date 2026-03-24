import { ToastifyAdapter } from "../adapters/ToastifyAdapter"

export function validateNumber(value: any, message?: string) {
    if ((value !== 0) && value && Number(value)) return true
    ToastifyAdapter.error(message ? message : 'Valor inválido! Informe uma valor numérico.')
}