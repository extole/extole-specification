import type { GlobalContext } from "../../../../GlobalContext";
import type { OAuthRequestResult } from "./OAuthRequestResult";
import type { OAuthResponseBuilder } from "./OAuthResponseBuilder";

export interface OAuthClientKeyResponseContext extends GlobalContext {
    createResponseBuilder(): OAuthResponseBuilder;
    getOAuthRequestResult(): OAuthRequestResult;
    getVariable(variableName: string): unknown | null;
    getVariable(name: string, key: string): unknown | null;
    getVariable(name: string, keys: string[]): unknown | null;
}
