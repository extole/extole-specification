import type { ProxyClientRequest } from "./ProxyClientRequest";
import type { ProxyRequest } from "./ProxyRequest";
import type { ProxyRequestBuilder } from "./ProxyRequestBuilder";
import type { RuntimeVariableContext } from "../../../../RuntimeVariableContext";

export interface ProxyClientKeyRequestContext extends RuntimeVariableContext {
    createRequestBuilder(): ProxyRequestBuilder;
    getCallerClientId(): string;
    getClientRequest(): ProxyClientRequest;
    refuse(reason: string): ProxyRequest;
}
