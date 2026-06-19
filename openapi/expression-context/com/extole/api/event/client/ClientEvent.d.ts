import type { ClientEventDataValue } from "./ClientEventDataValue";
import type { NativeMap } from "../../../native/collection/NativeMap";

export interface ClientEvent {
    getClientId(): string;
    getData(): NativeMap<string, ClientEventDataValue>;
    getEventId(): string;
    getEventTime(): string;
    getEventType(): string;
    getLevel(): string;
    getMessage(): string;
    getName(): string;
    getScope(): string;
    getTags(): string[];
    getUserId(): string | null;
}
