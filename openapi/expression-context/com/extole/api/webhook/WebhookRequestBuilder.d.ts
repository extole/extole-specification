import type { WebhookRequest } from "./WebhookRequest";

export interface WebhookRequestBuilder {
    addHeader(name: string, value: string): WebhookRequestBuilder;
    addHeader(name: string, values: string[]): WebhookRequestBuilder;
    addUrlTemplateParameter(name: string, value: string): WebhookRequestBuilder;
    build(): WebhookRequest;
    withBody(body: string): WebhookRequestBuilder;
    withMethod(method: string): WebhookRequestBuilder;
    withUrl(url: string): WebhookRequestBuilder;
    withUserAgent(userAgent: string): WebhookRequestBuilder;
}
