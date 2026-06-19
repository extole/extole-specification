import type { PersonStep } from "../../person/PersonStep";
import type { StepConsumerEvent } from "../../event/step/StepConsumerEvent";
import type { StepContext } from "../StepContext";

export interface StepActionContext extends StepContext {
    getPrimaryStep(): PersonStep;
    getStepAliases(): PersonStep[];
    getStepEvent(): StepConsumerEvent;
}
