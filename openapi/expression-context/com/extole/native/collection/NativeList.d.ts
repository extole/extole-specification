/**
 * Native list interface surfaced in expressions.
 *
 * Native lists are host objects with special handling beyond plain arrays:
 * {@code list[i]} reads an element and {@code list.length} mirrors {@code size()}.
 * A {@code for...in} loop enumerates index strings ({@code "0"}, {@code "1"}, ...),
 * not values — read {@code list[i]} inside the loop. Indexed assignment
 * ({@code list[i] = ...}) is supported on mutable lists and may throw when the
 * underlying implementation is not mutable.
 *
 * @example
 * var items = context.getGlobalServices().getLanguage().toList("gold", "silver");
 * for (var i in items) {
 *   var item = items[i];
 * }
 */
export interface NativeList<E> {
    get(index: number): E;
    size(): number;
    isEmpty(): boolean;
    contains(element: unknown): boolean;
    indexOf(element: unknown): number;

    /** May throw if mutation is not supported by the underlying implementation. */
    add(element: E): boolean;

    forEach(action: (element: E) => void): void;
}
