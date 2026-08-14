import type { StepConsumerEventTriggerResult } from "./StepConsumerEventTriggerResult";

export interface SelectedCampaignContext {
    getCampaignId(): string;
    getCampaignState(): string;
    getCampaignVersion(): number;
    getJourneyName(): string;
    getProgramLabel(): string;
    getQuality(): string;
    getTriggerResults(): StepConsumerEventTriggerResult[];
}
