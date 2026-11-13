import type { NativeList } from "../../../../../native/collection/NativeList";
import type { NativeMap } from "../../../../../native/collection/NativeMap";

export interface ProxyPartnerResponse {
    getBody(): string | null;
    getHeaders(): NativeMap<string, NativeList<string>>;
    getStatusCode(): number;
}
