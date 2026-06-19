export interface EmailVerificationVerifiedEmail {
    getAddress(): string;
    getNormalizedAddress(): string;
    getTitle(): string | null;
}
