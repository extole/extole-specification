import type { GlobalContext } from "../../../GlobalContext";
import type { NativeMap } from "../../../../native/collection/NativeMap";
import type { OAuthClientCredentials } from "./OAuthClientCredentials";
import type { OAuthRequestBuilder } from "./OAuthRequestBuilder";

export interface OAuthClientKeyRuntimeContext extends GlobalContext {
    createRequestBuilder(): OAuthRequestBuilder;
    encodeToFormUrlEncoded(dataMap: NativeMap<string, string>): string;
    getClientCredentials(): OAuthClientCredentials;
    getVariable(name: string): unknown | null;
    getVariable(name: string, key: string): unknown | null;
    getVariable(name: string, keys: string[]): unknown | null;
}
