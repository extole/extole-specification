import type { ReportResultStatusValue } from "./ReportResultStatusValue";

export interface ReportResultStatus {
    name(): ReportResultStatusValue;
    ordinal(): number;
    toString(): string;
}
