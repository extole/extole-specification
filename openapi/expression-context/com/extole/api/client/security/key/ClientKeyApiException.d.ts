import type { ApiException } from "../../../ApiException";
import type { NativeMap } from "../../../../native/collection/NativeMap";

export interface ClientKeyApiException extends ApiException {
    getCode(): string;
    getParameters(): NativeMap<string, string>;
}
