import type { CampaignComponent } from "../campaign/CampaignComponent";

export interface ComponentService {
    getComponentInCurrentCampaign(componentId: string): CampaignComponent;
}
