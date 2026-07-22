import type { ClientKeyApiException } from "./ClientKeyApiException";

export interface ClientKey {
    getAlgorithm(): string;
    getId(): string;
    /**
     * @throws {ClientKeyApiException}
     */
    getKey(): string;
}
