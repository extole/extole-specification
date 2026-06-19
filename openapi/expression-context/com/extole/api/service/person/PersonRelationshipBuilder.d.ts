import type { NativeMap } from "../../../native/collection/NativeMap";
import type { PersonBuilder } from "./PersonBuilder";

export interface PersonRelationshipBuilder {
    addData(name: string, value: unknown): PersonRelationshipBuilder;
    clearData(): PersonRelationshipBuilder;
    done(): PersonBuilder;
    removeData(name: string): PersonRelationshipBuilder;
    withCampaignId(campaignId: string): PersonRelationshipBuilder;
    withData(data: NativeMap<string, unknown>): PersonRelationshipBuilder;
    withMyRole(myRole: string): PersonRelationshipBuilder;
    withOtherPersonId(otherPersonId: string): PersonRelationshipBuilder;
    withOtherPersonRole(otherPersonRole: string): PersonRelationshipBuilder;
    withProgram(program: string): PersonRelationshipBuilder;
    withReason(reason: string): PersonRelationshipBuilder;
}
