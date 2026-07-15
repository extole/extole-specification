import type { Person } from "../person/Person";

export interface RewardFulfillmentEvaluationContext {
    getPerson(): Person;
}
