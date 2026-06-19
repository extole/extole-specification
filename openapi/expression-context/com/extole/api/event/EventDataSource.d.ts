import type { EventDataSourceValue } from "./EventDataSourceValue";

export interface EventDataSource {
    name(): EventDataSourceValue;
    ordinal(): number;
    toString(): string;
}
