import type { NativeMap } from "../../../../native/collection/NativeMap";
import type { NativeURI } from "../../../../native/network/NativeURI";

export interface PublicReward {
    getCode(): string | null;
    getData(): NativeMap<string, unknown>;
    getExpiryDate(): string | null;
    getFaceValue(): string;
    getFaceValueType(): string;
    getImage(): NativeURI | null;
    getInstructions(): string | null;
    getLink(): NativeURI | null;
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
