import * as fs from 'tns-core-modules/file-system';
export interface Options {
  height?: number;
  width?: number;
  quality: number;
  format?: Format;
  dest?: string;
  src: string;
}

export type Format = 'jpeg' | 'jpg' | 'png';

export function getFile(src: any): string {
  if (src.startsWith('/')) {
    return src;
  } else if (src.startsWith("~/")) {
    return fs.path.join(fs.knownFolders.currentApp().path, src.replace("~/", ""));
  }
  return '';
}