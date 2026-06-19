export interface JsonService {
    readJsonPath(json: unknown, jsonPath: string): unknown | null;
    toJsonObject(jsonString: string): unknown;
    toJsonString(object: unknown): string;
}
