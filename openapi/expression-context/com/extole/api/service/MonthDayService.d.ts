import type { InvalidMonthDayException } from "./InvalidMonthDayException";
import type { NativeMonthDay } from "../../native/time/NativeMonthDay";

export interface MonthDayService {
    /**
     * @throws {InvalidMonthDayException}
     */
    valueOf(val: string): NativeMonthDay;
    valueOf(month: number, dayOfMonth: number): NativeMonthDay;
}
