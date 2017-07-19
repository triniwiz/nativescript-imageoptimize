import { Options } from './imageoptimize.common';
declare const id: any;
export class ImageOptimize {
    private optimizer;
    private options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    public optimize(): Promise<any> {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./worker.js');
            worker.onmessage = (msg) => {
                if (!msg.data.message) {
                    resolve({ file: msg.data.file });
                    worker.terminate();
                } else {
                    reject({ message: msg.data.message });
                    worker.terminate();
                }
            }
            worker.postMessage({ options: this.options });
        });
    }
}
