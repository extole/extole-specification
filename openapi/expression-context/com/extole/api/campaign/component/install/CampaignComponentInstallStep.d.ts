import type { CampaignComponentInstallStepDataStepData } from "./step/data/CampaignComponentInstallStepDataStepData";
import type { Trigger } from "./Trigger";

export interface CampaignComponentInstallStep {
    anchor(stepData: CampaignComponentInstallStepDataStepData | Trigger): void;
    getId(): string;
    getName(): string;
    getType(): string;
}
