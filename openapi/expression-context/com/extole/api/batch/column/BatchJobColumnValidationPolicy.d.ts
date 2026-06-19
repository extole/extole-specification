import type { BatchJobColumnValidationPolicyValue } from "./BatchJobColumnValidationPolicyValue";

export interface BatchJobColumnValidationPolicy {
    name(): BatchJobColumnValidationPolicyValue;
    ordinal(): number;
    toString(): string;
}
