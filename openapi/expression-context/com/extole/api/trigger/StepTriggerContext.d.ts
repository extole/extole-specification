import type { StepContext } from "../step/StepContext";
import type { TargetingContext } from "../step/TargetingContext";

export interface StepTriggerContext extends StepContext {
    getTargetingContext(): TargetingContext;
}
