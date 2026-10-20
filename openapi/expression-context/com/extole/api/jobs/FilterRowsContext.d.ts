import type { NativeMap } from "../../native/collection/NativeMap";

export interface FilterRowsContext {
    getRow(): NativeMap<string, unknown>;
}
