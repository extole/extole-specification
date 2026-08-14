import type { InvalidNumberException } from "./InvalidNumberException";
import type { NumberOverflowException } from "./NumberOverflowException";

export interface IntegerService {
    valueOf(value: boolean | number | string): number;
    /**
     * @throws {NumberOverflowException}
     */
    valueOf(value: number): number;
    /**
     * @throws {InvalidNumberException}
     */
    valueOf(value: string): number;
    /**
     * @throws {InvalidNumberException}
     */
    valueOf(value: string, radix: number): number;
    valueOfOrDefault(value: string, defaultValue: number): number;
}
