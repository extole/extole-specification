import type { ClientEvent } from "../../event/client/ClientEvent";
import type { GlobalContext } from "../../GlobalContext";
import type { NotificationSubscriptionUserSubscription } from "./NotificationSubscriptionUserSubscription";

export interface UserSubscriptionFilterContext extends GlobalContext {
    getEvent(): ClientEvent;
    getUserSubscription(): NotificationSubscriptionUserSubscription;
}
