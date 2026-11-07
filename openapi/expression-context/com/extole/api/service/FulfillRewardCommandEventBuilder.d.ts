import type { InvalidUriException } from "./person/InvalidUriException";

export interface FulfillRewardCommandEventBuilder {
    send(): void;
    withCode(code: string): FulfillRewardCommandEventBuilder;
    /**
     * @throws {InvalidUriException}
     */
    withImage(image: string): FulfillRewardCommandEventBuilder;
    withInstructions(instructions: string): FulfillRewardCommandEventBuilder;
    /**
     * @throws {InvalidUriException}
     */
    withLink(link: string): FulfillRewardCommandEventBuilder;
    withMessage(message: string): FulfillRewardCommandEventBuilder;
    withPartnerRewardId(partnerRewardId: string): FulfillRewardCommandEventBuilder;
    withSuccess(success: boolean): FulfillRewardCommandEventBuilder;
}
