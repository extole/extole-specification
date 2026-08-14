import type { NativeMap } from "../../native/collection/NativeMap";

export interface Share {
    getChannel(): string | null;
    getData(): NativeMap<string, string>;
    getId(): string;
}
