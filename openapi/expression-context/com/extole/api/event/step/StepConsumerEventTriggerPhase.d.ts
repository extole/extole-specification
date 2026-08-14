import type { StepConsumerEventTriggerPhaseValue } from "./StepConsumerEventTriggerPhaseValue";

export interface StepConsumerEventTriggerPhase {
    name(): StepConsumerEventTriggerPhaseValue;
    ordinal(): number;
    toString(): string;
}
