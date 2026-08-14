import type { NativeList } from "../../../../../native/collection/NativeList";
import type { NativeMap } from "../../../../../native/collection/NativeMap";

export interface OAuthRequestResult {
    getResponseBody(): string | null;
    getResponseHeaders(): NativeMap<string, NativeList<string>>;
    getResponseStatusCode(): number;
}
