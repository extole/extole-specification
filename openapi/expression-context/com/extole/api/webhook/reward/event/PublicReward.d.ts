import type { NativeMap } from "../../../../native/collection/NativeMap";

export interface PublicReward {
    getData(): NativeMap<string, unknown>;
    getFaceValue(): string;
    getFaceValueType(): string;
    getPartnerRewardId(): string | null;
    getPartnerRewardKeyType(): string;
    getPartnerRewardSupplierId(): string | null;
    getPartnerUserId(): string | null;
    getPersonId(): string;
    getRewardId(): string;
    getRewardName(): string;
    getRewardSupplierId(): string;
    getRewardSupplierName(): string;
    getRewardSupplierType(): string;
    getType(): string;
}
