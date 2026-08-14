import type { CampaignBuildtimeContext } from "./CampaignBuildtimeContext";

export interface SocketDescriptionBuildtimeContext extends CampaignBuildtimeContext {
    getName(): string;
}
