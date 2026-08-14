import type { ClientContext } from "../ClientContext";
import type { ClientDomainContext } from "../ClientDomainContext";
import type { EventContext } from "./EventContext";
import type { NativeMap } from "../../native/collection/NativeMap";
import type { Person } from "../person/Person";
import type { Sandbox } from "./Sandbox";

export interface ConsumerEvent {
    getCauseEventId(): string;
    getClientContext(): ClientContext;
    getClientDomainContext(): ClientDomainContext;
    getData(): NativeMap<string, unknown>;
    getEventContext(): EventContext;
    getEventSequence(): number;
    getEventTime(): string;
    getId(): string;
    getPerson(): Person;
    getRequestTime(): string;
    getRootEventId(): string;
    getSandbox(): Sandbox;
    getType(): string;
}
