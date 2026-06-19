import type { EventDataSource } from "./EventDataSource";

export interface EventData {
    getName(): string;
    getSource(): EventDataSource;
    getValue(): unknown;
    isVerified(): boolean;
}
