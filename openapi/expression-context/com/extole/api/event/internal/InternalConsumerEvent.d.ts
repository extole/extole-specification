import type { ConsumerEvent } from "../ConsumerEvent";

export interface InternalConsumerEvent extends ConsumerEvent {
    getCampaignId(): string;
    getLabels(): string[];
    getName(): string;
}
