import type { BatchJobBuilder } from "./BatchJobBuilder";
import type { BatchJobListQueryBuilder } from "./BatchJobListQueryBuilder";
import type { BatchJobServiceException } from "./BatchJobServiceException";

export interface BatchJobService {
    /**
     * @throws {BatchJobServiceException}
     */
    create(): BatchJobBuilder;
    /**
     * @throws {BatchJobServiceException}
     */
    list(): BatchJobListQueryBuilder;
}
