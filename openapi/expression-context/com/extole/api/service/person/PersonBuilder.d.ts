import type { InvalidEmailException } from "./InvalidEmailException";
import type { InvalidUriException } from "./InvalidUriException";
import type { Person } from "../../person/Person";
import type { PersonBuilderException } from "./PersonBuilderException";
import type { PersonRelationshipBuilder } from "./PersonRelationshipBuilder";
import type { ShareableCreateBuilder } from "./ShareableCreateBuilder";
import type { ShareableUpdateBuilder } from "./ShareableUpdateBuilder";

export interface PersonBuilder {
    addData(name: string, value: string, scope: string): PersonBuilder;
    addKey(type: string, value: string): PersonBuilder;
    clearFirstName(): PersonBuilder;
    clearLastName(): PersonBuilder;
    clearProfilePictureUrl(): PersonBuilder;
    createRelationship(): PersonRelationshipBuilder;
    /**
     * @throws {PersonBuilderException}
     */
    createShareable(): ShareableCreateBuilder;
    /**
     * @throws {PersonBuilderException}
     */
    save(): Person;
    updateShareable(code: string): ShareableUpdateBuilder;
    withDisplacedPerson(displacedPersonId: string): PersonBuilder;
    /**
     * @throws {InvalidEmailException}
     */
    withEmail(email: string): PersonBuilder;
    withFirstName(firstName: string): PersonBuilder;
    withIdentityKeyValue(identityKeyValue: string): PersonBuilder;
    withLastName(lastName: string): PersonBuilder;
    withPartnerUserId(partnerUserId: string): PersonBuilder;
    withProfileBlock(message: string): PersonBuilder;
    /**
     * @throws {InvalidUriException}
     */
    withProfilePictureUrl(profilePictureUrl: string): PersonBuilder;
}
