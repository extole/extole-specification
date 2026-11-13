import type { ProxyResponse } from "./ProxyResponse";

export interface ProxyResponseBuilder {
    addHeader(name: string, value: string): ProxyResponseBuilder;
    addHeader(name: string, values: string[]): ProxyResponseBuilder;
    build(): ProxyResponse;
    withBody(body: string): ProxyResponseBuilder;
    withStatusCode(statusCode: number): ProxyResponseBuilder;
}
