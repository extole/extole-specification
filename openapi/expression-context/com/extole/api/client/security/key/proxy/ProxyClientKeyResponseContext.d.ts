import type { ProxyClientRequest } from "./ProxyClientRequest";
import type { ProxyPartnerResponse } from "./ProxyPartnerResponse";
import type { ProxyResponse } from "./ProxyResponse";
import type { ProxyResponseBuilder } from "./ProxyResponseBuilder";
import type { RuntimeVariableContext } from "../../../../RuntimeVariableContext";
import type { User } from "../../../../user/User";

export interface ProxyClientKeyResponseContext extends RuntimeVariableContext {
    createResponseBuilder(): ProxyResponseBuilder;
    getCallerClientId(): string;
    getCallerUser(): User | null;
    getClientRequest(): ProxyClientRequest;
    getPartnerResponse(): ProxyPartnerResponse;
    refuse(reason: string): ProxyResponse;
}
