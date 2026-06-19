import type { NativeDuration } from "../../../native/time/NativeDuration";
import type { NativeList } from "../../../native/collection/NativeList";
import type { NativeSet } from "../../../native/collection/NativeSet";
import type { UserSubscriptionChannel } from "./channel/UserSubscriptionChannel";

export interface NotificationSubscriptionUserSubscription {
    getChannels(): NativeList<UserSubscriptionChannel>;
    getClientId(): string;
    getCreatedDate(): string;
    getDedupeDuration(): NativeDuration;
    getFilteringLevel(): string;
    getSubscriptionTags(): NativeSet<string>;
    getUpdatedDate(): string;
    getUserId(): string;
}
