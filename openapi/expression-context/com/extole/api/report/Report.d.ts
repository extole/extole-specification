import type { ReportReportFormat } from "./ReportReportFormat";
import type { ReportResult } from "./ReportResult";

export interface Report {
    getCreatedDate(): string;
    getDisplayName(): string;
    getExecutorType(): string;
    getId(): string;
    getName(): string;
    getReportFormats(): ReportReportFormat[];
    getReportResult(): ReportResult;
    getSftpServerId(): string | null;
    getTags(): string[];
    getUserId(): string;
}
