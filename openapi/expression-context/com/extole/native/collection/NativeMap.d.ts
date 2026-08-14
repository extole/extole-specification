import type { NativeList } from "./NativeList";
import type { NativeSet } from "./NativeSet";

/**
 * Native map interface surfaced in expressions.
 *
 * Native maps are host objects with special handling beyond plain records:
 * {@code for...in} enumerates keys, {@code map[key]} reads values, and
 * {@code map.key} works when the key is a valid identifier. Square brackets take
 * precedence over dot access for map entries. {@code get} returns {@code null}
 * for a missing key.
 *
 * @example
 * var data = context.getGlobalServices().getShareableService().getByCode("promo").getData();
 * for (var key in data) {
 *   var value = data[key];
 * }
 */
export interface NativeMap<K, V> {
    get(key: K): V | null;

    /** May throw if mutation is not supported by the underlying implementation. */
    put(key: K, value: V): V | null;

    /** May throw if mutation is not supported by the underlying implementation. */
    remove(key: K): V | null;

    containsKey(key: K): boolean;
    containsValue(value: unknown): boolean;
    size(): number;
    isEmpty(): boolean;
    keySet(): NativeSet<K>;
    values(): NativeList<V>;
    forEach(action: (key: K, value: V) => void): void;
}
