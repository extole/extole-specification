import type { ClientKey } from "../../../client/security/key/ClientKey";
import type { ClientKeyApiException } from "../../../client/security/key/ClientKeyApiException";
import type { ClientKeyQueryBuilder } from "./ClientKeyQueryBuilder";

export interface ClientKeyService {
    /**
     * @throws {ClientKeyApiException}
     */
    createClientKey(name: string, algorithm: string): ClientKey;
    /**
     * @throws {ClientKeyApiException}
     */
    getOrCreateClientKey(name: string, algorithm: string): ClientKey;
    query(): ClientKeyQueryBuilder;
}
