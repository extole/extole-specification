/**
 * Native date interface surfaced in expressions.
 */
export interface NativeDate {
    getDate(): number;
    getDay(): number;
    getHours(): number;
    getMinutes(): number;
    getMonth(): number;
    getSeconds(): number;
    getTime(): number;
    getTimezoneOffset(): number;
    getYear(): number;
    setDate(date: number): void;
    setHours(hours: number): void;
    setMinutes(minutes: number): void;
    setMonth(month: number): void;
    setSeconds(seconds: number): void;
    setTime(time: number): void;
    setYear(year: number): void;
    toGMTString(): string;
    toLocaleString(): string;
    toString(): string;
}
