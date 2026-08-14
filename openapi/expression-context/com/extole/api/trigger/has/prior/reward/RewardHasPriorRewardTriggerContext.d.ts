import type { HasPriorRewardTriggerContext } from "./HasPriorRewardTriggerContext";
import type { PersonReward } from "../../../../person/PersonReward";

export interface RewardHasPriorRewardTriggerContext extends HasPriorRewardTriggerContext {
    getReward(): PersonReward;
}
