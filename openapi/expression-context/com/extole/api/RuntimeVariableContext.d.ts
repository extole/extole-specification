import type { GlobalContext } from "./GlobalContext";
import type { RuntimeComponent } from "./component/RuntimeComponent";

export interface RuntimeVariableContext extends GlobalContext {
    getComponent(): RuntimeComponent | null;
    getVariable(name: string): unknown | null;
    getVariable(name: string, key: string): unknown | null;
}
