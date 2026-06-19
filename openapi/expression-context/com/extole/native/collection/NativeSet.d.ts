/**
 * Native set interface surfaced in expressions.
 *
 * Native sets are host objects without array-like or record-like access:
 * {@code for...in} does not enumerate elements and {@code set[i]} is not supported.
 * Use {@code contains}, {@code forEach}, or {@code size} instead.
 *
 * @example
 * var keys = context.getGlobalServices().getShareableService().getByCode("promo").getData().keySet();
 * if (keys.contains("tier")) { ... }
 */
export interface NativeSet<E> {
    contains(element: unknown): boolean;

    /** May throw if mutation is not supported by the underlying implementation. */
    add(element: E): boolean;

    /** May throw if mutation is not supported by the underlying implementation. */
    remove(element: unknown): boolean;

    size(): number;
    isEmpty(): boolean;
    forEach(action: (element: E) => void): void;
}
