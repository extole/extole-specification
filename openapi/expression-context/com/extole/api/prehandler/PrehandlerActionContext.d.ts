import type { Person } from "../person/Person";
import type { PrehandlerContext } from "./PrehandlerContext";
import type { ProcessedRawEventBuilder } from "./ProcessedRawEventBuilder";

export interface PrehandlerActionContext extends PrehandlerContext {
    addLogMessage(logMessage: string): void;
    getEventBuilder(): ProcessedRawEventBuilder;
    replaceCandidatePerson(person: Person): void;
}
