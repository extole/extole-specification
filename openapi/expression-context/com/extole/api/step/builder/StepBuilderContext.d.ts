import type { RuntimeVariableContext } from "../../RuntimeVariableContext";
import type { StepContext } from "../StepContext";
import type { StepDataBuilder } from "./StepDataBuilder";
import type { VariableContext } from "../../campaign/VariableContext";

export interface StepBuilderContext extends StepContext, VariableContext, RuntimeVariableContext {
    addStepData(dataName: string): StepDataBuilder;
}
