import type { NativeList } from "../../../../native/collection/NativeList";
import type { PersonCollectionQueryBuilder } from "./PersonCollectionQueryBuilder";
import type { PersonReferral } from "../../../person/PersonReferral";

export interface FullPersonRelationshipQueryBuilder extends PersonCollectionQueryBuilder<PersonReferral> {
    withContainers(containers: NativeList<string>): FullPersonRelationshipQueryBuilder;
    withExcludeAnonymous(excludeAnonymous: boolean): FullPersonRelationshipQueryBuilder;
    withMyRoles(myRoles: NativeList<string>): FullPersonRelationshipQueryBuilder;
}
