import type { EarnedReward } from "./EarnedReward";
import type { Person } from "../person/Person";
import type { RuntimeVariableContext } from "../RuntimeVariableContext";
import type { VariableContext } from "../campaign/VariableContext";

export interface EarnedRewardEvaluationContext extends VariableContext, RuntimeVariableContext {
    getPerson(): Person;
    getReward(): EarnedReward;
}
