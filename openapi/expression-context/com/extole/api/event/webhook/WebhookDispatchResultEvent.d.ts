import type { NativeList } from "../../../native/collection/NativeList";
import type { NativeMap } from "../../../native/collection/NativeMap";

export interface WebhookDispatchResultEvent {
    getAttemptCount(): number;
    getClientId(): string;
    getConfiguredRetriesCount(): number;
    getEventTime(): string;
    getLogMessages(): string[];
    getMethod(): string | null;
    getRequestBody(): string | null;
    getRequestHeaders(): NativeMap<string, NativeList<string>>;
    getResponseBody(): string | null;
    getResponseHeaders(): NativeMap<string, NativeList<string>>;
    getResponseStatusCode(): number | null;
    getTags(): string[];
    getUrl(): string | null;
    getWebhookId(): string;
}
