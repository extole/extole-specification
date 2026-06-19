export interface ClientContext {
    getClientId(): string;
    getClientShortName(): string;
    getTimezone(): string;
}
