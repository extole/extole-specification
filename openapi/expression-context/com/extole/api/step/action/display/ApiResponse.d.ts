import type { NativeMap } from "../../../../native/collection/NativeMap";

export interface ApiResponse {
    getBody(): string;
    getHeaders(): NativeMap<string, string>;
    getStatusCode(): number;
}
