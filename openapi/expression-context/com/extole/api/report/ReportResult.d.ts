import type { ReportResultStatus } from "./ReportResultStatus";

export interface ReportResult {
    getCompletedDate(): string | null;
    getCreatedDate(): string;
    getData(offset: number, limit: number): unknown[];
    getStartedDate(): string | null;
    getStatus(): ReportResultStatus;
    getTotalRows(): number;
}
