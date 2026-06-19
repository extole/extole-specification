import type { JourneyDataDefinition } from "./JourneyDataDefinition";
import type { JourneyKey } from "./JourneyKey";
import type { NativeMap } from "../../native/collection/NativeMap";

export interface PersonJourney {
    getCampaignId(): string;
    getContainer(): string;
    getCreatedDate(): string;
    getData(): NativeMap<string, unknown>;
    getDataDefinitions(): JourneyDataDefinition[];
    getId(): string;
    getJourneyName(): string;
    getKey(): JourneyKey | null;
    getProgramLabel(): string | null;
}
