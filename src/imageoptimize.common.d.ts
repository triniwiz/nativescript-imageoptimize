export interface Options {
    height?: number;
    width?: number;
    quality: number;
    format?: Format;
    dest?: string;
    src: string;
}
export declare type Format = 'jpeg' | 'jpg' | 'png';
export declare function getFile(src: any): string;
