import type { NativeMap } from "../../../../native/collection/NativeMap";

export interface PublicReward {
    getCode(): string | null;
    getData(): NativeMap<string, unknown>;
    getExpiryDate(): string | null;
    getFaceValue(): string;
    getFaceValueType(): string;
    getImage(): string | null;
    getInstructions(): string | null;
    getLink(): string | null;
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
