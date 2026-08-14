import type { PersonReferral } from "../person/PersonReferral";

export interface TargetingContext {
    getReferral(): PersonReferral | null;
}
