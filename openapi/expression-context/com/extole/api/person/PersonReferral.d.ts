export interface PersonReferral {
    getClientId(): string;
    getContainer(): string;
    getCreatedDate(): string;
    getMySide(): string;
    getOtherPersonId(): string;
    getReason(): string;
    getUpdatedDate(): string;
    isDisplaced(): boolean;
}
