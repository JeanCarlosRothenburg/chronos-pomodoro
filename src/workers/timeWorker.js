let isRunning = false

self.onmessage = function(event) {
    if (isRunning) return
    isRunning = true
    const state = event.data
    const {activeTask, secondsRemaining} = state
    const endDate = activeTask.startDate + (secondsRemaining * 1000)
    const actualDate = Date.now()
    let countDownSeconds = Math.ceil((endDate - actualDate) / 1000)

    function tick() {
        self.postMessage(countDownSeconds)
        const actualDate = Date.now()
        countDownSeconds = Math.floor((endDate - actualDate) / 1000)
        setTimeout(tick, 1000)
    }

    tick()
}