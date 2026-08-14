import type { NativeMap } from "../../native/collection/NativeMap";

export interface ReferralContext {
    getData(): NativeMap<string, unknown>;
    getMySide(): string;
    getOtherPersonId(): string;
    getOtherPersonSide(): string;
    getReason(): string;
}
