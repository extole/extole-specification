import type { CampaignComponent } from "./CampaignComponent";
import type { CampaignComponentAsset } from "./CampaignComponentAsset";
import type { ComponentService } from "../service/ComponentService";
import type { GlobalContext } from "../GlobalContext";
import type { LoggerContext } from "../LoggerContext";
import type { VariableContext } from "./VariableContext";

export interface ComponentBuildtimeContext extends GlobalContext, LoggerContext {
    getAsset(assetName: string): CampaignComponentAsset | null;
    getComponent(): CampaignComponent | null;
    getComponentService(): ComponentService;
    getVariableContext(): VariableContext;
    getVariableContext(defaultKey: string | string[]): VariableContext;
}
