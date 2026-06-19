/**
 * Native arbitrary-precision decimal interface surfaced in expressions.
 *
 * Native decimals are host objects where arithmetic operators ({@code +},
 * {@code -}, {@code *}, {@code /}) coerce to {@code number} and can lose
 * precision. Use {@code add}, {@code subtract}, {@code multiply}, and
 * {@code divide} for decimal-safe math.
 *
 * @example
 * var amount = context.getGlobalServices().getBigDecimalService().valueOf("1.50");
 * var total = amount.add(amount);
 */
export interface NativeBigDecimal {
    add(augend: NativeBigDecimal): NativeBigDecimal;
    subtract(subtrahend: NativeBigDecimal): NativeBigDecimal;
    multiply(multiplicand: NativeBigDecimal): NativeBigDecimal;
    divide(divisor: NativeBigDecimal): NativeBigDecimal;
    toString(): string;
    doubleValue(): number;
    longValue(): number;
    intValue(): number;
}
