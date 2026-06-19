import type { ClientKeyApiException } from "./ClientKeyApiException";

export interface ClientKey {
    getAlgorithm(): string;
    /**
     * @throws {ClientKeyApiException}
     */
    getKey(): string;
}
