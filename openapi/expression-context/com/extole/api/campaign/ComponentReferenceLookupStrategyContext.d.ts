import type { CampaignComponent } from "./CampaignComponent";
import type { ComponentBuildtimeContext } from "./ComponentBuildtimeContext";

export interface ComponentReferenceLookupStrategyContext extends ComponentBuildtimeContext {
    getCandidate(): CampaignComponent;
    getSettingValue(name: string): unknown | null;
    toPathWithTargetSockets(component: CampaignComponent): string;
}
