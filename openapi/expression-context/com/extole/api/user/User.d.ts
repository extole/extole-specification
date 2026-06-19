export interface User {
    getClientId(): string;
    getEmail(): string;
    getFirstName(): string | null;
    getId(): string;
    getLastName(): string | null;
    getScopes(): string[];
}
