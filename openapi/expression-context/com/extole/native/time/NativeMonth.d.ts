import type { NativeMonthValue } from "./NativeMonthValue";

export interface NativeMonth {
    name(): NativeMonthValue;
    ordinal(): number;
    toString(): string;
}
