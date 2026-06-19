import type { NativeMap } from "../../native/collection/NativeMap";
import type { PersonAudienceMembership } from "./PersonAudienceMembership";
import type { PersonJourney } from "./PersonJourney";
import type { PersonLocation } from "./PersonLocation";
import type { PersonReferral } from "./PersonReferral";
import type { PersonReward } from "./PersonReward";
import type { PersonStep } from "./PersonStep";
import type { RequestContext } from "./RequestContext";
import type { Shareable } from "./Shareable";

export interface Person {
    getAudienceMemberships(): PersonAudienceMembership[];
    getData(): NativeMap<string, unknown>;
    getDisplacedPersonId(): string | null;
    getEmail(): string | null;
    getFirstName(): string | null;
    getId(): string;
    getIdentityId(): string | null;
    getIdentityKey(): string;
    getIdentityKeyValue(): string | null;
    getJourneys(): PersonJourney[];
    getLastName(): string | null;
    getLocale(): string | null;
    getNormalizedEmail(): string | null;
    getPartnerUserId(): string | null;
    getPreferredLocale(): string;
    getPrivateData(): NativeMap<string, unknown>;
    getProfilePictureUrl(): string | null;
    getPublicData(): NativeMap<string, unknown>;
    getRecentAssociatedAdvocates(): PersonReferral[];
    getRecentAssociatedFriends(): PersonReferral[];
    getRecentLocations(): PersonLocation[];
    getRecentRequestContexts(): RequestContext[];
    getRewards(): PersonReward[];
    getShareables(): Shareable[];
    getSteps(): PersonStep[];
    isBlocked(): boolean;
}
