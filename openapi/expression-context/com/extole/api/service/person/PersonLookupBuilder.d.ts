import type { Person } from "../../person/Person";

export interface PersonLookupBuilder {
    lookup(): Person | null;
    withEmail(email: string): PersonLookupBuilder;
    withIdentityKeyValue(identityKeyValue: string): PersonLookupBuilder;
    withPersonId(personId: string): PersonLookupBuilder;
    withPersonKey(type: string, value: string): PersonLookupBuilder;
}
