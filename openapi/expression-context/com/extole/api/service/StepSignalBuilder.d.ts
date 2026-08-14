export interface StepSignalBuilder {
    addData(key: string, value: unknown): StepSignalBuilder;
    send(): void;
    withName(name: string): StepSignalBuilder;
}
