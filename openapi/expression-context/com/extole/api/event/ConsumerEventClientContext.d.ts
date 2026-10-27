export interface ConsumerEventClientContext {
    getClientId(): string;
    getClientShortName(): string;
    getTimezone(): string;
}
