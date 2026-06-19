import type { Action } from "./step/action/Action";
import type { CampaignComponentInstallStepDataStepData } from "./step/data/CampaignComponentInstallStepDataStepData";
import type { Trigger } from "./Trigger";

export interface SourceComponent {
    getActions(): Action[];
    getStepData(): CampaignComponentInstallStepDataStepData[];
    getTriggers(): Trigger[];
    getUnanchoredActions(): Action[];
    getUnanchoredStepData(): CampaignComponentInstallStepDataStepData[];
    getUnanchoredTriggers(): Trigger[];
}
