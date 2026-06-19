export interface CampaignFlowStep {
    getJourneyStartStep(): CampaignFlowStep | null;
    getName(): string;
    getPersonCountingName(): string;
    getPluralNounName(): string;
    getPreviousStep(): CampaignFlowStep | null;
    getRateName(): string;
    getSingularNounName(): string;
    getStepName(): string;
    getVerbName(): string;
}
