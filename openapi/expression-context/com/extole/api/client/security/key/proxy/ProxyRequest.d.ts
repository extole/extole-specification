import type { NativeList } from "../../../../../native/collection/NativeList";
import type { NativeMap } from "../../../../../native/collection/NativeMap";

export interface ProxyRequest {
    getBody(): string | null;
    getHeaders(): NativeMap<string, NativeList<string>>;
    getMethod(): string | null;
    getRefusalReason(): string | null;
    getUrl(): string | null;
    isBearerCredential(): boolean;
}
