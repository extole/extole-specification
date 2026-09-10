import type { OAuthRequest } from "./OAuthRequest";

export interface OAuthRequestBuilder {
    addHeader(name: string, values: string[]): OAuthRequestBuilder;
    addHeader(name: string, value: string): OAuthRequestBuilder;
    build(): OAuthRequest;
    withBody(body: string): OAuthRequestBuilder;
    withUrl(url: string): OAuthRequestBuilder;
}
