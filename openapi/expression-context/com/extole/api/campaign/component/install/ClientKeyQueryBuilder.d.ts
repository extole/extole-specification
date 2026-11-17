import type { ClientKey } from "../../../client/security/key/ClientKey";
import type { ClientKeyApiException } from "../../../client/security/key/ClientKeyApiException";

export interface ClientKeyQueryBuilder {
    /**
     * @throws {ClientKeyApiException}
     */
    list(): ClientKey[];
    withIncludeSubscribed(includeSubscribed: boolean): ClientKeyQueryBuilder;
    withLimit(limit: number): ClientKeyQueryBuilder;
    withName(name: string): ClientKeyQueryBuilder;
    withOffset(offset: number): ClientKeyQueryBuilder;
    withType(type: string): ClientKeyQueryBuilder;
}
