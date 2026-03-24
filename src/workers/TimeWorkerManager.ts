import TimeWorker from './timeWorker.js?worker'

let instance: TimeWorkerManager | null = null   

export class TimeWorkerManager {
    private worker: Worker

    private constructor() {
        this.worker = new TimeWorker()
    }

    static getInstance() {
        if (!instance) {
            instance = new TimeWorkerManager()
        }

        return instance
    }

    postMessage(message: any) {
        this.worker.postMessage(message)
    }

    onmessage(callback: (e: MessageEvent) => void) {
        this.worker.onmessage = callback
    }

    terminate() {
        this.worker.terminate()
        instance = null
    }

}