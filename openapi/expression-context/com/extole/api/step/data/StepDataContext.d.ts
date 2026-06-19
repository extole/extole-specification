import type { RuntimeVariableContext } from "../../RuntimeVariableContext";
import type { StepContext } from "../StepContext";
import type { StepTriggerResult } from "./StepTriggerResult";
import type { VariableContext } from "../../campaign/VariableContext";

export interface StepDataContext extends StepContext, VariableContext, RuntimeVariableContext {
    getLatestJourneyDataValue(dataName: string): unknown | null;
    getQuality(): string | null;
    getReferralSource(): string | null;
    getStepEventId(): string;
    getTriggerResults(): StepTriggerResult[];
    typedSource(sourceType: string, source: unknown): string | null;
}
