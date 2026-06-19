import type { CampaignComponentInstallStep } from "./CampaignComponentInstallStep";

export interface CampaignComponentInstallJourneyEntry extends CampaignComponentInstallStep {
    getJourneyName(): string;
}
