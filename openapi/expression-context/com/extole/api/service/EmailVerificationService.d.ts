import type { EmailVerification } from "./EmailVerification";

export interface EmailVerificationService {
    isEmailValid(email: string): boolean;
    verifyEmail(email: string): EmailVerification;
}
