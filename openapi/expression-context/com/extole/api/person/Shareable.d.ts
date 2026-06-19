import type { NativeMap } from "../../native/collection/NativeMap";
import type { ShareableContent } from "./ShareableContent";

export interface Shareable {
    getClientDomainId(): string;
    getCode(): string;
    getContent(): ShareableContent;
    getCreatedDate(): string;
    getData(): NativeMap<string, string>;
    getId(): string;
    getKey(): string;
    getLabel(): string | null;
    getPersonId(): string;
}
