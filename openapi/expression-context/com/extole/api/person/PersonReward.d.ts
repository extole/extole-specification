import type { JourneyKey } from "./JourneyKey";
import type { NativeMap } from "../../native/collection/NativeMap";
import type { NativeOptional } from "../../native/collection/NativeOptional";
import type { NativeURI } from "../../native/network/NativeURI";

export interface PersonReward {
    expiryDate(): NativeOptional<string>;
    getCampaignId(): string | null;
    getCode(): string | null;
    getContainer(): string | null;
    getData(): NativeMap<string, string>;
    getDateEarned(): string;
    getExpiryDate(): string | null;
    getFaceValue(): string;
    getFaceValueType(): string;
    getId(): string;
    getImage(): NativeURI | null;
    getInstructions(): string | null;
    getJourneyKey(): JourneyKey | null;
    getJourneyName(): string;
    getLink(): NativeURI | null;
    getName(): string | null;
    getPartnerRewardId(): string | null;
    getPersonRole(): string;
    getProgramLabel(): string | null;
    getRedeemedDate(): string | null;
    getRewardId(): string | null;
    getRewardSlots(): string[];
    getRewardSupplierId(): string;
    getRewardedDate(): string;
    getSandbox(): string | null;
    getState(): string | null;
}
