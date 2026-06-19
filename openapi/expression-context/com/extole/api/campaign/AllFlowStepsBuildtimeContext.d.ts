import type { CampaignFlowStep } from "./CampaignFlowStep";
import type { FlowStepBuildtimeContext } from "./FlowStepBuildtimeContext";
import type { NativeMap } from "../../native/collection/NativeMap";

export interface AllFlowStepsBuildtimeContext extends FlowStepBuildtimeContext, CampaignFlowStep {
    getJourneyStartStep(): CampaignFlowStep | null;
    getPersonCountingName(): string;
    getPluralNounName(): string;
    getPreviousStep(): CampaignFlowStep | null;
    getRateName(): string;
    getSingularNounName(): string;
    getSteps(): NativeMap<string, CampaignFlowStep>;
    getVerbName(): string;
}
