import type { ApiResponse } from "./ApiResponse";
import type { NativeMap } from "../../../../native/collection/NativeMap";

export interface ApiResponseBuilder {
    build(): ApiResponse;
    withBody(body: string): ApiResponseBuilder;
    withHeader(name: string, value: string): ApiResponseBuilder;
    withHeaders(headers: NativeMap<string, string>): ApiResponseBuilder;
    withStatusCode(statusCode: number): ApiResponseBuilder;
}
