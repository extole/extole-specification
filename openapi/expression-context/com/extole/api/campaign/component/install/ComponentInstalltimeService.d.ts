import type { TargetComponent } from "./TargetComponent";

export interface ComponentInstalltimeService {
    getComponentInCurrentCampaign(componentId: string): TargetComponent;
}
