import type { StepCampaignStepStep } from "./step/StepCampaignStepStep";

export interface RunningCampaign {
    getId(): string;
    getProgramLabel(): string;
    getState(): string;
    getSteps(): StepCampaignStepStep[];
    getVersion(): number;
}
