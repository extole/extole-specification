import type { StepConsumerEventTriggerPhase } from "./StepConsumerEventTriggerPhase";

export interface StepConsumerEventTriggerResult {
    getLogMessages(): string[];
    getName(): string;
    getTriggerId(): string;
    getTriggerPhase(): StepConsumerEventTriggerPhase;
    getTriggerType(): string;
    isPassed(): boolean;
}
