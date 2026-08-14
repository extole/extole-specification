import type { InvalidNumberException } from "./InvalidNumberException";

export interface DoubleService {
    valueOf(value: boolean | number | string): number;
    /**
     * @throws {InvalidNumberException}
     */
    valueOf(value: string): number;
    valueOfOrDefault(value: string, defaultValue: number): number;
}
