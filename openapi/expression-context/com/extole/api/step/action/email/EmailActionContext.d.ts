import type { RuntimeVariableContext } from "../../../RuntimeVariableContext";
import type { StepActionContext } from "../StepActionContext";
import type { VariableContext } from "../../../campaign/VariableContext";

export interface EmailActionContext extends StepActionContext, VariableContext, RuntimeVariableContext {
    
}
