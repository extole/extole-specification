import type { FullPersonDataQueryBuilder } from "../../service/person/full/FullPersonDataQueryBuilder";
import type { FullPersonJourneyQueryBuilder } from "../../service/person/full/FullPersonJourneyQueryBuilder";
import type { FullPersonRelationshipQueryBuilder } from "../../service/person/full/FullPersonRelationshipQueryBuilder";
import type { FullPersonRewardQueryBuilder } from "../../service/person/full/FullPersonRewardQueryBuilder";
import type { FullPersonShareQueryBuilder } from "../../service/person/full/FullPersonShareQueryBuilder";
import type { FullPersonShareableQueryBuilder } from "../../service/person/full/FullPersonShareableQueryBuilder";
import type { FullPersonStepQueryBuilder } from "../../service/person/full/FullPersonStepQueryBuilder";
import type { Person } from "../Person";

export interface FullPerson extends Person {
    createDataQuery(): FullPersonDataQueryBuilder;
    createJourneysQuery(): FullPersonJourneyQueryBuilder;
    createRelationshipsQuery(): FullPersonRelationshipQueryBuilder;
    createRewardsQuery(): FullPersonRewardQueryBuilder;
    createShareablesQuery(): FullPersonShareableQueryBuilder;
    createSharesQuery(): FullPersonShareQueryBuilder;
    createStepsQuery(): FullPersonStepQueryBuilder;
}
