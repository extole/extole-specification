import type { LoggerContext } from "../LoggerContext";
import type { Person } from "../person/Person";
import type { ProcessedRawEvent } from "../event/ProcessedRawEvent";
import type { RawEvent } from "../event/RawEvent";
import type { RuntimeVariableContext } from "../RuntimeVariableContext";

export interface PrehandlerContext extends LoggerContext, RuntimeVariableContext {
    getCandidatePerson(): Person | null;
    getProcessedRawEvent(): ProcessedRawEvent;
    getRawEvent(): RawEvent;
}
