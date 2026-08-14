import type { ClientKeyService } from "./ClientKeyService";
import type { ComponentInstalltimeService } from "./ComponentInstalltimeService";
import type { SourceComponent } from "./SourceComponent";
import type { TargetComponent } from "./TargetComponent";
import type { VariableContext } from "../../VariableContext";

export interface ComponentInstalltimeContext {
    getClientKeyService(): ClientKeyService;
    getComponentService(): ComponentInstalltimeService;
    getSourceComponent(): SourceComponent;
    getTargetComponent(): TargetComponent;
    getVariableContext(): VariableContext;
    getVariableContext(defaultKey: string | string[]): VariableContext;
}
