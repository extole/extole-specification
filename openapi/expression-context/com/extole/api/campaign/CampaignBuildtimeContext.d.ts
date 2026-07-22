import type { ClientKeyService } from "./component/install/ClientKeyService";
import type { ComponentBuildtimeContext } from "./ComponentBuildtimeContext";
import type { GlobalContext } from "../GlobalContext";
import type { LoggerContext } from "../LoggerContext";

export interface CampaignBuildtimeContext extends ComponentBuildtimeContext, GlobalContext, LoggerContext {
    getCampaignId(): string;
    getCampaignName(): string;
    getCampaignType(): string;
    getClientKeyService(): ClientKeyService;
    getProgramLabel(): string;
    isCampaignVersionPublished(): boolean;
}
