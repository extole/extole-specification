import type { EarnRewardCommandEventBuilder } from "./EarnRewardCommandEventBuilder";
import type { FulfillRewardCommandEventBuilder } from "./FulfillRewardCommandEventBuilder";
import type { RedeemRewardCommandEventBuilder } from "./RedeemRewardCommandEventBuilder";

export interface RewardService {
    createEarnRewardCommandEventBuilder(): EarnRewardCommandEventBuilder;
    createFulfillRewardCommandEventBuilder(rewardId: string): FulfillRewardCommandEventBuilder;
    createRedeemRewardCommandEventBuilder(rewardId: string): RedeemRewardCommandEventBuilder;
}
