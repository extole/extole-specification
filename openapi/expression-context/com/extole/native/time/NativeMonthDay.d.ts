import type { NativeLocalDate } from "./NativeLocalDate";
import type { NativeMonth } from "./NativeMonth";

export interface NativeMonthDay {
    atYear(year: number): NativeLocalDate;
    getDayOfMonth(): number;
    getMonth(): NativeMonth;
    getMonthValue(): number;
    isAfter(other: NativeMonthDay): boolean;
    isBefore(other: NativeMonthDay): boolean;
    isValidYear(year: number): boolean;
    toString(): string;
    with(month: NativeMonth): NativeMonthDay;
    withDayOfMonth(dayOfMonth: number): NativeMonthDay;
    withMonth(month: number): NativeMonthDay;
}
