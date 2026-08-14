import type { ConsumerEvent } from "../ConsumerEvent";
import type { EventStepPartnerEventId } from "./EventStepPartnerEventId";
import type { JourneyContext } from "../JourneyContext";
import type { NativeBigDecimal } from "../../../native/math/NativeBigDecimal";
import type { ReferralContext } from "../ReferralContext";
import type { SelectedCampaignContext } from "./SelectedCampaignContext";

export interface StepConsumerEvent extends ConsumerEvent {
    getAliases(): string[];
    getJourneyContext(): JourneyContext | null;
    getName(): string;
    getPartnerEventId(): EventStepPartnerEventId | null;
    getReferralContext(): ReferralContext | null;
    getSelectedCampaignContext(): SelectedCampaignContext | null;
    getValue(): NativeBigDecimal | null;
    isDuplicate(): boolean;
    isFirstSiteVisit(): boolean;
}
