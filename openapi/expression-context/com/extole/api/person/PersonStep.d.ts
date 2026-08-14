import type { JourneyKey } from "./JourneyKey";
import type { NativeMap } from "../../native/collection/NativeMap";
import type { PersonPartnerEventId } from "./PersonPartnerEventId";
import type { StepDataDefinition } from "./StepDataDefinition";

export interface PersonStep {
    getCampaignId(): string | null;
    getCauseEventId(): string;
    getContainer(): string;
    getCreatedDate(): string;
    getData(): NativeMap<string, unknown>;
    getDataDefinitions(): StepDataDefinition[];
    getEventDate(): string;
    getEventId(): string;
    getId(): string;
    getJourneyKey(): JourneyKey | null;
    getJourneyName(): string | null;
    getPartnerEventId(): PersonPartnerEventId | null;
    getPersonId(): string;
    getPrivateData(): NativeMap<string, unknown>;
    getProgramLabel(): string | null;
    getPublicData(): NativeMap<string, unknown>;
    getQuality(): string;
    getRootEventId(): string;
    getScope(): string;
    getStepName(): string;
    getValue(): string | null;
    isAliasName(): boolean;
}
