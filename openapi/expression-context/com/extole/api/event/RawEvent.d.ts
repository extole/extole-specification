import type { ClientDomainContext } from "../ClientDomainContext";
import type { NativeMap } from "../../native/collection/NativeMap";

export interface RawEvent {
    getApiType(): string;
    getClientDomainContext(): ClientDomainContext;
    getEventName(): string;
    getHttpCookies(): NativeMap<string, string[]>;
    getHttpHeaders(): NativeMap<string, string[]>;
    getHttpParameters(): NativeMap<string, string[]>;
    getHttpRequestBody(): string | null;
    getHttpRequestMethod(): string;
    getIncomingUrl(): string;
    getRawEventId(): string;
    getReferrer(): string;
    getRequestTime(): string;
    getSourceIps(): string[];
    getUrl(): string;
}
