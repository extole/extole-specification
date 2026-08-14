/**
 * Native arbitrary-precision integer interface surfaced in expressions.
 *
 * Native integers are host objects where arithmetic operators coerce to
 * {@code number} and can lose precision beyond {@code Number.MAX_SAFE_INTEGER}.
 * Use {@code add}, {@code subtract}, {@code multiply}, and {@code divide} for
 * integer-safe math.
 */
export interface NativeBigInteger {
    add(augend: NativeBigInteger): NativeBigInteger;
    subtract(subtrahend: NativeBigInteger): NativeBigInteger;
    multiply(multiplicand: NativeBigInteger): NativeBigInteger;
    divide(divisor: NativeBigInteger): NativeBigInteger;
    toString(): string;
    longValue(): number;
    intValue(): number;
}
