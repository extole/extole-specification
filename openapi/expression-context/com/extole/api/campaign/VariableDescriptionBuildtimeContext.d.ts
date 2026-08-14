import type { CampaignBuildtimeContext } from "./CampaignBuildtimeContext";

export interface VariableDescriptionBuildtimeContext extends CampaignBuildtimeContext {
    getName(): string;
    getSource(): string;
    getValue(): unknown | null;
}
