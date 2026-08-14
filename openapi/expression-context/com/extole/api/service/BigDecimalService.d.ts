import type { InvalidNumberException } from "./InvalidNumberException";
import type { NativeBigDecimal } from "../../native/math/NativeBigDecimal";
import type { NativeBigInteger } from "../../native/math/NativeBigInteger";

export interface BigDecimalService {
    valueOf(val: NativeBigInteger | boolean | number | string): NativeBigDecimal;
    /**
     * @throws {InvalidNumberException}
     */
    valueOf(val: string): NativeBigDecimal;
    valueOfOrDefault(val: string, defaultValue: number): NativeBigDecimal;
}
