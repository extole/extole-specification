import type { CampaignBuildtimeContext } from "./CampaignBuildtimeContext";

export interface ControllerBuildtimeContext extends CampaignBuildtimeContext {
    getControllerName(): string;
}
