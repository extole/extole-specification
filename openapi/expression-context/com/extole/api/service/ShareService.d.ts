import type { Share } from "../person/Share";

export interface ShareService {
    getShare(shareId: string): Share | null;
    getShareByPartnerShareId(partnerShareId: string): Share | null;
}
