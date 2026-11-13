import type { NativeList } from "../../../../../native/collection/NativeList";
import type { NativeMap } from "../../../../../native/collection/NativeMap";

export interface ProxyResponse {
    getBody(): string | null;
    getHeaders(): NativeMap<string, NativeList<string>>;
    getRefusalReason(): string | null;
    getStatusCode(): number;
}
