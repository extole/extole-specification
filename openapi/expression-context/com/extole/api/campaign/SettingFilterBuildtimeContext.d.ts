import type { CampaignComponent } from "./CampaignComponent";
import type { ComponentBuildtimeContext } from "./ComponentBuildtimeContext";

export interface SettingFilterBuildtimeContext extends ComponentBuildtimeContext {
    getCandidate(): CampaignComponent;
    toPathWithTargetSockets(component: CampaignComponent): string;
}
