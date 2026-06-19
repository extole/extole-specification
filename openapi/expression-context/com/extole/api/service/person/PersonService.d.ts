import type { PersonBuilder } from "./PersonBuilder";
import type { PersonLookupBuilder } from "./PersonLookupBuilder";

export interface PersonService {
    createPerson(): PersonBuilder;
    isSamePerson(firstPersonId: string, secondPersonId: string): boolean;
    lookupPerson(): PersonLookupBuilder;
    updatePerson(personId: string): PersonBuilder;
}
