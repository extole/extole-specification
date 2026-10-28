import type { AudienceService } from "./audience/AudienceService";
import type { BlockService } from "./BlockService";
import type { CommonServices } from "./CommonServices";
import type { CouponService } from "./CouponService";
import type { JwtService } from "./JwtService";
import type { NotificationService } from "./NotificationService";
import type { PersonService } from "./person/PersonService";
import type { PublicClientDomainService } from "./PublicClientDomainService";
import type { RewardSupplierService } from "./RewardSupplierService";
import type { SecureEmailService } from "./SecureEmailService";
import type { ShareService } from "./ShareService";
import type { ShareableService } from "./ShareableService";
import type { UserService } from "./UserService";

export interface GlobalServices extends CommonServices {
    getAudienceService(): AudienceService;
    getBlockService(): BlockService;
    getCouponService(): CouponService;
    getJwtService(): JwtService;
    getNotificationService(): NotificationService;
    getPersonService(): PersonService;
    getPublicClientDomainService(): PublicClientDomainService;
    getRewardSupplierService(): RewardSupplierService;
    getSecureEmailService(): SecureEmailService;
    getShareService(): ShareService;
    getShareableService(): ShareableService;
    getUserService(): UserService;
}
