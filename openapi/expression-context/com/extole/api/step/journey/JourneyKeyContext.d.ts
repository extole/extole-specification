import type { ConsumerEvent } from "../../event/ConsumerEvent";
import type { GlobalContext } from "../../GlobalContext";
import type { LoggerContext } from "../../LoggerContext";
import type { Person } from "../../person/Person";
import type { RuntimeVariableContext } from "../../RuntimeVariableContext";
import type { Sandbox } from "../../event/Sandbox";
import type { VariableContext } from "../../campaign/VariableContext";

export interface JourneyKeyContext extends GlobalContext, LoggerContext, VariableContext, RuntimeVariableContext {
    getCampaignId(): string;
    getCauseEvent(): ConsumerEvent;
    getJourneyName(): string;
    getOtherPerson(): Person | null;
    getPerson(): Person;
    getProgramLabel(): string;
    getSandbox(): Sandbox;
    getStepEventId(): string;
    getStepName(): string;
}
