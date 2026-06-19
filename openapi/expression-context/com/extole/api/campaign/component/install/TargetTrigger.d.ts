import type { CampaignComponentInstallStep } from "./CampaignComponentInstallStep";
import type { Trigger } from "./Trigger";

export interface TargetTrigger extends Trigger {
    getId(): string;
    getName(): string;
    getStep(): CampaignComponentInstallStep;
    getType(): string;
}
