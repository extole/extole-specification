import type { ComponentReference } from "../component/ComponentReference";

export interface RewardSupplier {
    getCashBackPercentage(): string;
    getComponentReferences(): ComponentReference[];
    getDisplayType(): string;
    getFaceValue(): string;
    getFaceValueAlgorithmType(): string;
    getFaceValueType(): string;
    getMaxCashBack(): string;
    getMinCashBack(): string;
    getName(): string;
    getPartnerRewardKeyType(): string;
    getPartnerRewardSupplierId(): string | null;
    getRewardSupplierId(): string;
    getType(): string;
}
