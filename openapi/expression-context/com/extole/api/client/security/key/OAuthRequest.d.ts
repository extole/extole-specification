import type { NativeList } from "../../../../native/collection/NativeList";
import type { NativeMap } from "../../../../native/collection/NativeMap";

export interface OAuthRequest {
    getBody(): string | null;
    getHeaders(): NativeMap<string, NativeList<string>>;
    getUrl(): string;
}
