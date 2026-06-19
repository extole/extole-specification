import type { GlobalContext } from "../../../GlobalContext";
import type { LoggerContext } from "../../../LoggerContext";
import type { PublicReward } from "../event/PublicReward";
import type { Webhook } from "../../Webhook";

export interface RewardWebhookFilterRuntimeContext extends GlobalContext, LoggerContext {
    getReward(): PublicReward;
    getWebhook(): Webhook;
}
