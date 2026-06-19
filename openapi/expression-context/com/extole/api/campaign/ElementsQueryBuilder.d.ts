import type { Element } from "./Element";

export interface ElementsQueryBuilder {
    list(): Element[];
    withTag(tag: string): ElementsQueryBuilder;
    withType(elementType: string): ElementsQueryBuilder;
}
