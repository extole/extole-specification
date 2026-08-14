import type { HasPriorStepTriggerContext } from "./HasPriorStepTriggerContext";
import type { PersonStep } from "../../../../person/PersonStep";

export interface StepHasPriorStepTriggerContext extends HasPriorStepTriggerContext {
    getStep(): PersonStep;
}
