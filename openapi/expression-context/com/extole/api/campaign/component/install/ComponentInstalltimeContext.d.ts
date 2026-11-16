import type { ClientKeyService } from "./ClientKeyService";
import type { ComponentInstalltimeService } from "./ComponentInstalltimeService";
import type { SourceComponent } from "./SourceComponent";
import type { TargetComponent } from "./TargetComponent";
import type { VariableContext } from "../../VariableContext";

/**
 * The context of a component install script.
 * The script runs each time the component is installed into a campaign: by a copy, a bundle upload or an upgrade. It runs before the campaign is saved.
 *
 * Limits of this context:
 * - It cannot read a component reference setting, of type COMPONENT_REFERENCE or COMPONENT_REFERENCE_LIST. A reference is matched to its components when the campaign is saved, after the script runs.
 * - Such a read fails the install, from getVariableContext(), getTargetComponent() and getComponentService(). A read of a setting whose expression reads a reference fails the install too.
 * - A component from getComponentService().getComponent() has no getReferencedComponents(). That method is for build time.
 * - To find another component, give the script a COMPONENT_ID setting.
 */
export interface ComponentInstalltimeContext {
    getClientKeyService(): ClientKeyService;
    getComponentService(): ComponentInstalltimeService;
    getSourceComponent(): SourceComponent;
    getTargetComponent(): TargetComponent;
    getVariableContext(): VariableContext;
    getVariableContext(defaultKey: string | string[]): VariableContext;
}
