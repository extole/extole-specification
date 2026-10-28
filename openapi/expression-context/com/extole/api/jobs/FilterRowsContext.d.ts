import type { ClientContext } from "../ClientContext";
import type { CommonServices } from "../service/CommonServices";
import type { NativeMap } from "../../native/collection/NativeMap";

export interface FilterRowsContext {
    getClientContext(): ClientContext;
    getCommonServices(): CommonServices;
    getRow(): NativeMap<string, unknown>;
}
