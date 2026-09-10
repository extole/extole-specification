import type { AsyncActionContext } from "../../AsyncActionContext";
import type { RuntimeVariableContext } from "../../../../RuntimeVariableContext";
import type { VariableContext } from "../../../../campaign/VariableContext";

export interface EmailV2ActionContentContext extends AsyncActionContext, VariableContext, RuntimeVariableContext {
    
}
