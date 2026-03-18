export function formatSecondsToMinutes(seconds: number): string {
    const minutesMod = Math.floor(seconds / 60).toString().padStart(2, '0')
    const secondsMod = Math.floor(seconds % 60).toString().padStart(2, '0')

    return `${minutesMod}:${secondsMod}`
}