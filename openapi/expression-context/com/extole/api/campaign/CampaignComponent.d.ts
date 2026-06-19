import type { ElementsQueryBuilder } from "./ElementsQueryBuilder";

export interface CampaignComponent {
    createElementsQuery(): ElementsQueryBuilder;
    getChildren(): CampaignComponent[];
    getChildren(socketName: string): CampaignComponent[];
    getDescription(): string | null;
    getDisplayName(): string;
    getId(): string;
    getName(): string;
    getParent(): CampaignComponent | null;
    getPath(): string;
    getTypes(): string[];
    getVariableValue(name: string): unknown;
    getVariableValue(name: string, keys: string[]): unknown;
    hasVariable(name: string): boolean;
    isOfType(componentType: string): boolean;
}
