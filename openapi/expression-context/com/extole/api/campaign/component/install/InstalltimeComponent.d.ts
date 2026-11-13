import type { ElementsQueryBuilder } from "../../ElementsQueryBuilder";

export interface InstalltimeComponent {
    createElementsQuery(): ElementsQueryBuilder;
    getChildren(): InstalltimeComponent[];
    getChildren(socketName: string): InstalltimeComponent[];
    getDescription(): string | null;
    getDisplayName(): string;
    getId(): string;
    getName(): string;
    getParent(): InstalltimeComponent | null;
    getPath(): string;
    getTags(): string[];
    getTypes(): string[];
    getVariableValue(name: string): unknown;
    getVariableValue(name: string, keys: string[]): unknown;
    hasVariable(name: string): boolean;
    isOfType(componentType: string): boolean;
}
