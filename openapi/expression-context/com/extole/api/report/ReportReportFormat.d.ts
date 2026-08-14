import type { ReportReportFormatValue } from "./ReportReportFormatValue";

export interface ReportReportFormat {
    name(): ReportReportFormatValue;
    ordinal(): number;
    toString(): string;
}
