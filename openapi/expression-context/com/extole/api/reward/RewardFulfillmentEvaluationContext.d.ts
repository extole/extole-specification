import type { GlobalContext } from "../GlobalContext";
import type { Person } from "../person/Person";
import type { PersonReward } from "../person/PersonReward";

export interface RewardFulfillmentEvaluationContext extends GlobalContext {
    getPerson(): Person;
    getReward(): PersonReward;
}
