import type { InstalltimeComponent } from "./InstalltimeComponent";
import type { TargetComponent } from "./TargetComponent";

export interface ComponentInstalltimeService {
    getComponent(componentId: string): InstalltimeComponent;
    getComponentInCurrentCampaign(componentId: string): TargetComponent;
}
