import type { EventEntity } from "./EventEntity";
import type { ModelReportRunnerPauseInfo } from "./ModelReportRunnerPauseInfo";
import type { NativeMap } from "../../native/collection/NativeMap";
import type { ReportRunnerMergingConfiguration } from "./ReportRunnerMergingConfiguration";

export interface ModelReportRunner extends EventEntity {
    getCreatedDate(): string;
    getFormats(): string[];
    getId(): string;
    getName(): string;
    getParameters(): NativeMap<string, string>;
    getReportTypeName(): string;
    getScopes(): string[];
    getSftpServerId(): string | null;
    getTags(): string[];
    getType(): string;
    getUpdatedDate(): string;
    getUserId(): string;
    isLegacySftpReportNameFormat(): boolean;
    mergingConfiguration(): ReportRunnerMergingConfiguration | null;
    pauseInfo(): ModelReportRunnerPauseInfo | null;
}
