import { WriteFileOptions } from "fs";
import { Options, Mode } from "mkdirp";

export declare namespace index { }
export function writeFile
  (
    filepath: string | Buffer,
    data: string,
    options: WriteFileOptions & Options & Mode,
    callback?: (err: any) => void
  ): null | Promise<any>;

export function promise(filepath: string | Buffer, data: string, options: WriteFileOptions): Promise<any>;