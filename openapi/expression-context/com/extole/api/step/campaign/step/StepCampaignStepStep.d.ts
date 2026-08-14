import type { StepCampaignStepDataStepData } from "./data/StepCampaignStepDataStepData";
import type { StepTrigger } from "./trigger/StepTrigger";

export interface StepCampaignStepStep {
    getData(): StepCampaignStepDataStepData[];
    getId(): string;
    getJourneyName(): string;
    getName(): string;
    getTriggers(): StepTrigger[];
    getType(): string;
}
