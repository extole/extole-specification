import type { CampaignBuildtimeContext } from "./CampaignBuildtimeContext";

export interface VariableBuildtimeContext extends CampaignBuildtimeContext {
    getKey(): string;
    getName(): string;
    getSource(): string;
}
