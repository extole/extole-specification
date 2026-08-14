import type { BatchJobStatusValue } from "./BatchJobStatusValue";

export interface BatchJobStatus {
    name(): BatchJobStatusValue;
    ordinal(): number;
    toString(): string;
}
