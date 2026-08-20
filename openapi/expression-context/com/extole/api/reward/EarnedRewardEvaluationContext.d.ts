import type { EarnedReward } from "./EarnedReward";
import type { GlobalContext } from "../GlobalContext";
import type { Person } from "../person/Person";

export interface EarnedRewardEvaluationContext extends GlobalContext {
    getPerson(): Person;
    getReward(): EarnedReward;
}
