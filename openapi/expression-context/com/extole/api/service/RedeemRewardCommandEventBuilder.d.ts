export interface RedeemRewardCommandEventBuilder {
    addData(key: string, value: unknown): RedeemRewardCommandEventBuilder;
    send(): void;
    withPartnerEventId(partnerEventId: string): RedeemRewardCommandEventBuilder;
}
