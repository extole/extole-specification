import type { CampaignComponent } from "../../CampaignComponent";
import type { TargetComponent } from "./TargetComponent";

export interface ComponentInstalltimeService {
    getComponent(componentId: string): CampaignComponent;
    getComponentInCurrentCampaign(componentId: string): TargetComponent;
}
