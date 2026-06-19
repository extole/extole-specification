import type { NativeList } from "../native/collection/NativeList";

export interface Language {
    firstNotNull(objects: unknown[]): unknown | null;
    reverse(objects: unknown[]): unknown[] | null;
    sort(objects: unknown[]): unknown[] | null;
    toList(objects: unknown[]): NativeList<unknown> | null;
}
