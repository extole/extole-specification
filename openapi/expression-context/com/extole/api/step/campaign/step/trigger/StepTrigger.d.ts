export interface StepTrigger {
    getId(): string;
    getName(): string;
    getNegated(): boolean;
    getPhase(): string;
    getType(): string;
}
