import { Options } from './imageoptimize.common';
export declare class ImageOptimize {
    private optimizer;
    private options;
    constructor(options: Options);
    optimize(): Promise<any>;
}
