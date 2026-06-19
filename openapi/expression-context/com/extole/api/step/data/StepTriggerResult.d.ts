export interface StepTriggerResult {
    getId(): string;
    getLogMessages(): string[];
    getName(): string;
    getPhase(): string;
    getType(): string;
    isPassed(): boolean;
}
