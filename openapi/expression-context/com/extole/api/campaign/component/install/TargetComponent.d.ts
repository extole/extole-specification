import type { CampaignComponentInstallController } from "./CampaignComponentInstallController";
import type { CampaignComponentInstallJourneyEntry } from "./CampaignComponentInstallJourneyEntry";
import type { CampaignComponentInstallStep } from "./CampaignComponentInstallStep";
import type { FrontendController } from "./FrontendController";
import type { TargetTrigger } from "./TargetTrigger";

export interface TargetComponent {
    getControllers(): CampaignComponentInstallController[];
    getFrontendControllers(): FrontendController[];
    getJourneyEntries(): CampaignComponentInstallJourneyEntry[];
    getParent(): TargetComponent | null;
    getSteps(): CampaignComponentInstallStep[];
    getTriggers(): TargetTrigger[];
    getVariableValue(name: string): unknown;
    getVariableValue(name: string, keys: string[]): unknown;
}
