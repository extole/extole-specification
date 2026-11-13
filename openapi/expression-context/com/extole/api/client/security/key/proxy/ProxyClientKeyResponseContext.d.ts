import type { ProxyClientRequest } from "./ProxyClientRequest";
import type { ProxyPartnerResponse } from "./ProxyPartnerResponse";
import type { ProxyResponse } from "./ProxyResponse";
import type { ProxyResponseBuilder } from "./ProxyResponseBuilder";
import type { RuntimeVariableContext } from "../../../../RuntimeVariableContext";

export interface ProxyClientKeyResponseContext extends RuntimeVariableContext {
    createResponseBuilder(): ProxyResponseBuilder;
    getCallerClientId(): string;
    getClientRequest(): ProxyClientRequest;
    getPartnerResponse(): ProxyPartnerResponse;
    refuse(reason: string): ProxyResponse;
}
