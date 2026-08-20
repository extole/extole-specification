import type { JourneyKey } from "../person/JourneyKey";
import type { NativeMap } from "../../native/collection/NativeMap";

export interface EarnedReward {
    getCampaignId(): string;
    getContainer(): string;
    getData(): NativeMap<string, string>;
    getEarnedDate(): string;
    getFaceValue(): string;
    getFaceValueType(): string;
    getJourneyKey(): JourneyKey | null;
    getJourneyName(): string;
    getName(): string;
    getProgramLabel(): string;
    getRewardId(): string;
    getRewardSlots(): string[];
    getRewardSupplierId(): string;
    getSandbox(): string;
}
