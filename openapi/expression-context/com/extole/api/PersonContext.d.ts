import type { Person } from "./person/Person";
import type { PersonBuilder } from "./service/person/PersonBuilder";
import type { ShareableGetOrCreateBuilder } from "./service/person/ShareableGetOrCreateBuilder";

export interface PersonContext<T extends Person> {
    getOrCreateShareable(): ShareableGetOrCreateBuilder;
    getPerson(): T;
    updatePerson(): PersonBuilder;
}
