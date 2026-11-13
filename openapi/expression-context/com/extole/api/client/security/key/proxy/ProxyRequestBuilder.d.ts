import type { ProxyRequest } from "./ProxyRequest";

export interface ProxyRequestBuilder {
    addHeader(name: string, value: string): ProxyRequestBuilder;
    addHeader(name: string, values: string[]): ProxyRequestBuilder;
    build(): ProxyRequest;
    withBearerCredential(): ProxyRequestBuilder;
    withBody(body: string): ProxyRequestBuilder;
    withMethod(method: string): ProxyRequestBuilder;
    withUrl(url: string): ProxyRequestBuilder;
}
