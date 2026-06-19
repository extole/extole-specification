import type { BatchJob } from "../batch/BatchJob";
import type { BatchJobColumn } from "../batch/column/BatchJobColumn";
import type { BatchJobServiceException } from "./BatchJobServiceException";
import type { NativeMap } from "../../native/collection/NativeMap";

export interface BatchJobBuilder {
    /**
     * @throws {BatchJobServiceException}
     */
    save(): BatchJob;
    withColumns(columns: BatchJobColumn[]): BatchJobBuilder;
    /**
     * @throws {BatchJobServiceException}
     */
    withDefaultEventName(defaultEventName: string): BatchJobBuilder;
    withEventColumns(eventColumns: string[]): BatchJobBuilder;
    withEventData(eventData: NativeMap<string, string>): BatchJobBuilder;
    /**
     * @throws {BatchJobServiceException}
     */
    withEventName(eventName: string): BatchJobBuilder;
    /**
     * @throws {BatchJobServiceException}
     */
    withName(name: string): BatchJobBuilder;
    /**
     * @throws {BatchJobServiceException}
     */
    withTags(tags: string[]): BatchJobBuilder;
}
