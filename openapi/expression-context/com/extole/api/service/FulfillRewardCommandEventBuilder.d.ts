export interface FulfillRewardCommandEventBuilder {
    send(): void;
    withMessage(message: string): FulfillRewardCommandEventBuilder;
    withPartnerRewardId(partnerRewardId: string): FulfillRewardCommandEventBuilder;
    withSuccess(success: boolean): FulfillRewardCommandEventBuilder;
}
