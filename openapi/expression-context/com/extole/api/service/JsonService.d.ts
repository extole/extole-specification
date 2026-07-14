import type { JsonServiceException } from "./JsonServiceException";

export interface JsonService {
    /**
     * @throws {JsonServiceException}
     */
    readJsonPath(json: unknown, jsonPath: string): unknown | null;
    readJsonPath(json: unknown, jsonPath: string, defaultValue: unknown): unknown | null;
    /**
     * @throws {JsonServiceException}
     */
    toJsonObject(jsonString: string | null): unknown | null;
    toJsonObject(jsonString: string | null, defaultValue: unknown): unknown | null;
    /**
     * @throws {JsonServiceException}
     */
    toJsonString(object: unknown | null): string | null;
    toJsonString(object: unknown | null, defaultValue: string): string | null;
}
