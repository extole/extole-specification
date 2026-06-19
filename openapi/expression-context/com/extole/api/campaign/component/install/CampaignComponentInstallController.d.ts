import type { Action } from "./step/action/Action";
import type { CampaignComponentInstallStep } from "./CampaignComponentInstallStep";
import type { CampaignComponentInstallStepDataStepData } from "./step/data/CampaignComponentInstallStepDataStepData";
import type { Trigger } from "./Trigger";

export interface CampaignComponentInstallController extends CampaignComponentInstallStep {
    anchor(action: Action | CampaignComponentInstallStepDataStepData | Trigger): void;
    getActions(): Action[];
    getAliases(): string[];
}
