/**
 * Native optional interface surfaced in expressions.
 *
 * Native optionals are host objects with special truthiness: an empty optional is
 * still truthy in expressions. Use {@code isPresent()}, {@code isEmpty()}, or
 * {@code orElse()} rather than {@code if (optional)}. {@code get()} throws when
 * empty.
 */
export interface NativeOptional<T> {
    isPresent(): boolean;
    isEmpty(): boolean;
    get(): T;
    orElse(other: T): T;
    ifPresent(action: (value: T) => void): void;
}
