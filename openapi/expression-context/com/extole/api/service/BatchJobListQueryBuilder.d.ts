import type { BatchJob } from "../batch/BatchJob";
import type { BatchJobServiceException } from "./BatchJobServiceException";
import type { BatchJobStatus } from "../batch/BatchJobStatus";
import type { NativeList } from "../../native/collection/NativeList";

export interface BatchJobListQueryBuilder {
    /**
     * @throws {BatchJobServiceException}
     */
    execute(): NativeList<BatchJob>;
    withLimit(limit: number): BatchJobListQueryBuilder;
    withName(name: string): BatchJobListQueryBuilder;
    withOffset(offset: number): BatchJobListQueryBuilder;
    withStatuses(statuses: BatchJobStatus[]): BatchJobListQueryBuilder;
    withTags(tags: string[]): BatchJobListQueryBuilder;
}
