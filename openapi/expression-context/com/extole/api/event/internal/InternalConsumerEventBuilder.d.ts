import type { InternalConsumerEvent } from "./InternalConsumerEvent";
import type { NativeMap } from "../../../native/collection/NativeMap";

export interface InternalConsumerEventBuilder {
    addData(name: string, value: unknown): InternalConsumerEventBuilder;
    addLabel(label: string): InternalConsumerEventBuilder;
    send(): InternalConsumerEvent;
    withCampaignId(campaignId: string): InternalConsumerEventBuilder;
    withData(data: NativeMap<string, unknown>): InternalConsumerEventBuilder;
    withEventTime(eventTime: string): InternalConsumerEventBuilder;
    withName(name: string): InternalConsumerEventBuilder;
}
