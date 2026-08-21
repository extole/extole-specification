import type { CampaignComponent } from "./CampaignComponent";
import type { ComponentBuildtimeContext } from "./ComponentBuildtimeContext";

export interface ComponentReferenceLookupStrategyContext extends ComponentBuildtimeContext {
    getCandidate(): CampaignComponent;
    toPathWithTargetSockets(component: CampaignComponent): string;
}
