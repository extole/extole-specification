import type { NativeList } from "../../native/collection/NativeList";
import type { NativeMap } from "../../native/collection/NativeMap";

export interface WebhookRequest {
    getBody(): string | null;
    getHeaders(): NativeMap<string, NativeList<string>>;
    getMethod(): string;
    getUrl(): string;
    getUrlTemplateParameters(): NativeMap<string, string>;
}
