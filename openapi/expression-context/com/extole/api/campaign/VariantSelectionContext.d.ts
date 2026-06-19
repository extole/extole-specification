import type { LocaleParseService } from "../service/LocaleParseService";
import type { Person } from "../person/Person";

export interface VariantSelectionContext {
    getLocaleParseService(): LocaleParseService;
    getPerson(): Person;
    selectVariant(preferredVariants: string[] | null): string;
}
