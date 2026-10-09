import type { NativeURI } from "../../native/network/NativeURI";

export interface FulfillRewardCommandEventBuilder {
    send(): void;
    withCode(code: string): FulfillRewardCommandEventBuilder;
    withImage(image: NativeURI): FulfillRewardCommandEventBuilder;
    withInstructions(instructions: string): FulfillRewardCommandEventBuilder;
    withLink(link: NativeURI): FulfillRewardCommandEventBuilder;
    withMessage(message: string): FulfillRewardCommandEventBuilder;
    withPartnerRewardId(partnerRewardId: string): FulfillRewardCommandEventBuilder;
    withSuccess(success: boolean): FulfillRewardCommandEventBuilder;
}
