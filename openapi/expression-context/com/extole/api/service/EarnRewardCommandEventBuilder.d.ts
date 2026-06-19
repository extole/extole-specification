export interface EarnRewardCommandEventBuilder {
    addData(key: string, value: string): EarnRewardCommandEventBuilder;
    addTag(tag: string): EarnRewardCommandEventBuilder;
    send(): void;
    withEarnedEventValue(earnedEventValue: string): EarnRewardCommandEventBuilder;
    withEventTime(eventTime: string): EarnRewardCommandEventBuilder;
    withRewardName(name: string): EarnRewardCommandEventBuilder;
    withRewardSupplierId(rewardSupplierId: string): EarnRewardCommandEventBuilder;
}
