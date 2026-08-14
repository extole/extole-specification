import type { CandidateStep } from "./CandidateStep";
import type { ConsumerEvent } from "../event/ConsumerEvent";
import type { GlobalContext } from "../GlobalContext";
import type { JourneyKey } from "../person/JourneyKey";
import type { LoggerContext } from "../LoggerContext";
import type { Person } from "../person/Person";
import type { PersonJourney } from "../person/PersonJourney";
import type { RunningCampaign } from "./campaign/RunningCampaign";
import type { RuntimeVariableContext } from "../RuntimeVariableContext";
import type { Sandbox } from "../event/Sandbox";
import type { VariableContext } from "../campaign/VariableContext";

export interface StepContext extends GlobalContext, LoggerContext, VariableContext, RuntimeVariableContext {
    getCampaign(): RunningCampaign;
    getCampaignId(): string;
    getCandidateJourney(): PersonJourney | null;
    getCandidateStep(): CandidateStep;
    getCauseEvent(): ConsumerEvent;
    getJourney(): PersonJourney | null;
    getJourneyKey(): JourneyKey | null;
    getJourneyName(): string;
    getOtherPerson(): Person | null;
    getPerson(): Person;
    getProgramLabel(): string;
    getSandbox(): Sandbox;
    getStepName(): string;
}
