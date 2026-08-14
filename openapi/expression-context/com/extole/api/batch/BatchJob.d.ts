import type { BatchJobColumn } from "./column/BatchJobColumn";
import type { BatchJobResult } from "./BatchJobResult";
import type { BatchJobStatus } from "./BatchJobStatus";
import type { NativeMap } from "../../native/collection/NativeMap";

export interface BatchJob {
    getBatchJobId(): string;
    getClientId(): string;
    getColumns(): BatchJobColumn[];
    getCreatedDate(): string;
    getDefaultEventName(): string;
    getEventColumns(): string[];
    getEventData(): NativeMap<string, string>;
    getEventName(): string | null;
    getName(): string;
    getResult(): BatchJobResult;
    getStatus(): BatchJobStatus;
    getTags(): string[];
    getUpdatedDate(): string;
    getUserId(): string;
}
