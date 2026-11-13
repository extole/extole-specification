import type { InstalltimeComponent } from "./component/install/InstalltimeComponent";

export interface CampaignComponent extends InstalltimeComponent {
    getChildren(): CampaignComponent[];
    getChildren(socketName: string): CampaignComponent[];
    getParent(): CampaignComponent | null;
    getReferencedComponents(settingName: string): CampaignComponent[];
}
