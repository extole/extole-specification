import type { CampaignComponent } from "../campaign/CampaignComponent";

export interface ComponentService {
    getComponent(componentId: string): CampaignComponent;
    getComponentInCurrentCampaign(componentId: string): CampaignComponent;
}
