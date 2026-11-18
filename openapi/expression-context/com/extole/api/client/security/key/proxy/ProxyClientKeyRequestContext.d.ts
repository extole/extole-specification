import type { ProxyClientRequest } from "./ProxyClientRequest";
import type { ProxyRequest } from "./ProxyRequest";
import type { ProxyRequestBuilder } from "./ProxyRequestBuilder";
import type { RuntimeVariableContext } from "../../../../RuntimeVariableContext";
import type { User } from "../../../../user/User";

export interface ProxyClientKeyRequestContext extends RuntimeVariableContext {
    addAuditData(name: string, value: string): void;
    createRequestBuilder(): ProxyRequestBuilder;
    getCallerClientId(): string;
    getCallerUser(): User | null;
    getClientRequest(): ProxyClientRequest;
    refuse(reason: string): ProxyRequest;
}
