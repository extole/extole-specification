import type { NativeMap } from "../native/collection/NativeMap";

export interface ApiException {
    getCode(): string;
    getParameters(): NativeMap<string, string>;
}
