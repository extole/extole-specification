import type { BatchJobColumnTypeValue } from "./BatchJobColumnTypeValue";

export interface BatchJobColumnType {
    name(): BatchJobColumnTypeValue;
    ordinal(): number;
    toString(): string;
}
