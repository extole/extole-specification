import type { ApiResponseBuilder } from "./ApiResponseBuilder";
import type { DisplayActionContext } from "./DisplayActionContext";
import type { NativeMap } from "../../../../native/collection/NativeMap";

export interface DisplayActionResponseContext extends DisplayActionContext {
    getBody(): string;
    getHeaders(): NativeMap<string, string>;
    getResponseBuilder(): ApiResponseBuilder;
}
