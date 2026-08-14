import type { InvalidDateException } from "./InvalidDateException";
import type { InvalidTimezoneException } from "./InvalidTimezoneException";
import type { NativeDate } from "../../native/time/NativeDate";

export interface DateService {
    now(): string;
    /**
     * @throws {InvalidDateException}
     */
    parse(date: string): NativeDate;
    /**
     * @throws {InvalidDateException}
     */
    parse(format: string, date: string): NativeDate;
    /**
     * @throws {InvalidDateException}
     */
    toClientTimezone(dateTime: string): string;
    /**
     * @throws {InvalidDateException}
     * @throws {InvalidTimezoneException}
     */
    toClientTimezone(dateTime: string, format: string): string;
    /**
     * @throws {InvalidDateException}
     */
    toClientTimezone(dateTime: string, sameLocal: boolean): string;
    /**
     * @throws {InvalidDateException}
     * @throws {InvalidTimezoneException}
     */
    toTimezone(dateTime: string, timezone: string): string;
    /**
     * @throws {InvalidDateException}
     * @throws {InvalidTimezoneException}
     */
    toTimezone(dateTime: string, format: string, timezone: string): string;
    /**
     * @throws {InvalidDateException}
     * @throws {InvalidTimezoneException}
     */
    toTimezone(dateTime: string, timezone: string, sameLocal: boolean): string;
}
