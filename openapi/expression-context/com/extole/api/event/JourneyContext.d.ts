import type { JourneyKey } from "../person/JourneyKey";

export interface JourneyContext {
    getCampaignId(): string;
    getJourneyKey(): JourneyKey | null;
    getJourneyName(): string;
    getProgramLabel(): string;
}
