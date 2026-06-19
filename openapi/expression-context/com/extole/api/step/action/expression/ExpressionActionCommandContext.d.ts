import type { AsyncActionContext } from "../AsyncActionContext";
import type { AudienceMembershipService } from "../../../service/AudienceMembershipService";
import type { InternalConsumerEventBuilder } from "../../../event/internal/InternalConsumerEventBuilder";
import type { JourneyKey } from "../../../person/JourneyKey";
import type { PersonJourney } from "../../../person/PersonJourney";
import type { RewardService } from "../../../service/RewardService";
import type { RuntimeVariableContext } from "../../../RuntimeVariableContext";
import type { StepSignalBuilder } from "../../../service/StepSignalBuilder";
import type { VariableContext } from "../../../campaign/VariableContext";

export interface ExpressionActionCommandContext extends AsyncActionContext, VariableContext, RuntimeVariableContext {
    getAudienceMembershipService(): AudienceMembershipService;
    getJourney(): PersonJourney | null;
    getJourneyKey(): JourneyKey | null;
    getRewardService(): RewardService;
    internalConsumerEventBuilder(): InternalConsumerEventBuilder;
    stepSignalBuilder(pollingId: string): StepSignalBuilder;
}
