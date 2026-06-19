import type { StepBuilderContext } from "./StepBuilderContext";

export interface StepDataBuilder {
    done(): StepBuilderContext;
    withScope(scope: string): StepDataBuilder;
    withValue(value: unknown): StepDataBuilder;
}
