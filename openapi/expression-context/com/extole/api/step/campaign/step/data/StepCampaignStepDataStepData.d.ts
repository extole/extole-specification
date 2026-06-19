import type { NativeRuntimeEvaluatable } from "../../../../../native/evaluatable/NativeRuntimeEvaluatable";

export interface StepCampaignStepDataStepData {
    getName(): string;
    getValue(): NativeRuntimeEvaluatable;
}
