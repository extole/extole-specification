import type { CampaignBuildtimeContext } from "./CampaignBuildtimeContext";

export interface FlowStepBuildtimeContext extends CampaignBuildtimeContext {
    getName(): string;
    getStepName(): string;
}
