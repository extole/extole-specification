import type { IdentityKey } from "./client/IdentityKey";

export interface ClientContext {
    getClientId(): string;
    getClientShortName(): string;
    getIdentityKey(): IdentityKey;
    getTimezone(): string;
}
