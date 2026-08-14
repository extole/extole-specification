import type { PersonCollectionQueryBuilderPersonCollectionIterator } from "./PersonCollectionQueryBuilderPersonCollectionIterator";

export interface PersonCollectionQueryBuilder<T> {
    iterator(): PersonCollectionQueryBuilderPersonCollectionIterator<T>;
    withLimit(limit: number): PersonCollectionQueryBuilder<T>;
    withOffset(offset: number): PersonCollectionQueryBuilder<T>;
}
