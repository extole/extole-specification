import type { NativeList } from "../../native/collection/NativeList";

export interface Element {
    getId(): string;
    getTags(): NativeList<string>;
    getType(): string;
}
