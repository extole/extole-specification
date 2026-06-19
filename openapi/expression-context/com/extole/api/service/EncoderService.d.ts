import type { ClientKey } from "../client/security/key/ClientKey";

export interface EncoderService {
    decodeBase64(input: string): number[];
    decodeHex(input: string): number[];
    decodeWithBase64(input: string): string;
    encodeBase64(input: number[]): string;
    encodeHS256(key: number[], message: number[]): number[];
    encodeHS256(key: ClientKey, message: number[]): number[];
    encodeHex(input: number[]): string;
    encodeSha256(input: number[]): number[];
    encodeWithBase64(input: string): string;
    encodeWithHS256Algorithm(key: string, message: string): string;
    encodeWithHS256AlgorithmAndBase64Key(key: string, message: string): string;
    encodeWithSha256(input: string): string;
    fromUtf8Bytes(input: number[]): string;
    safeCssString(input: string): string;
    safeCssUrl(input: string): string;
    safeHtml(input: string): string;
    safeHtmlAttribute(input: string): string;
    safeHtmlContent(input: string): string;
    safeHtmlUnquotedAttribute(input: string): string;
    safeJs(input: string): string;
    safeJsAttribute(input: string): string;
    safeJsBlock(input: string): string;
    safeUriComponent(input: string): string;
    toUtf8Bytes(value: string): number[];
}
