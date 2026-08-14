import type { EmailVerificationVerifiedEmail } from "./EmailVerificationVerifiedEmail";

export interface EmailVerification {
    getVerifiedEmail(): EmailVerificationVerifiedEmail | null;
    isEmailValid(): boolean;
}
