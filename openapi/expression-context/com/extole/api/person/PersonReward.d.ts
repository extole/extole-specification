import type { JourneyKey } from "./JourneyKey";
import type { NativeMap } from "../../native/collection/NativeMap";
import type { NativeOptional } from "../../native/collection/NativeOptional";

export interface PersonReward {
    expiryDate(): NativeOptional<string>;
    getCampaignId(): string | null;
    getContainer(): string | null;
    getData(): NativeMap<string, string>;
    getDateEarned(): string;
    getFaceValue(): string;
    getFaceValueType(): string;
    getId(): string;
    getJourneyKey(): JourneyKey | null;
    getJourneyName(): string;
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
