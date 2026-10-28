import type { BigDecimalService } from "./BigDecimalService";
import type { DateService } from "./DateService";
import type { DoubleService } from "./DoubleService";
import type { EmailVerificationService } from "./EmailVerificationService";
import type { EncoderService } from "./EncoderService";
import type { GlobService } from "./GlobService";
import type { IntegerService } from "./IntegerService";
import type { JsonService } from "./JsonService";
import type { Language } from "../Language";
import type { MonthDayService } from "./MonthDayService";
import type { RandomService } from "./RandomService";
import type { StringService } from "./StringService";
import type { UnicodeService } from "./UnicodeService";
import type { UrlService } from "./UrlService";

export interface CommonServices {
    getBigDecimalService(): BigDecimalService;
    getDateService(): DateService;
    getDoubleService(): DoubleService;
    getEmailVerificationService(): EmailVerificationService;
    getEncoderService(): EncoderService;
    getGlobService(): GlobService;
    getIntegerService(): IntegerService;
    getJsonService(): JsonService;
    getLanguage(): Language;
    getMonthDayService(): MonthDayService;
    getRandomService(): RandomService;
    getStringService(): StringService;
    getUnicodeService(): UnicodeService;
    getUrlService(): UrlService;
}
