import type { InvalidUriException } from "./person/InvalidUriException";
import type { NativeURI } from "../../native/network/NativeURI";

export interface FulfillRewardCommandEventBuilder {
    send(): void;
    withCode(code: string): FulfillRewardCommandEventBuilder;
    withImage(image: NativeURI): FulfillRewardCommandEventBuilder;
    /**
     * @throws {InvalidUriException}
     */
    withImageUrl(imageUrl: string): FulfillRewardCommandEventBuilder;
    withInstructions(instructions: string): FulfillRewardCommandEventBuilder;
    withLink(link: NativeURI): FulfillRewardCommandEventBuilder;
    /**
     * @throws {InvalidUriException}
     */
    withLinkUrl(linkUrl: string): FulfillRewardCommandEventBuilder;
    withMessage(message: string): FulfillRewardCommandEventBuilder;
    withPartnerRewardId(partnerRewardId: string): FulfillRewardCommandEventBuilder;
    withSuccess(success: boolean): FulfillRewardCommandEventBuilder;
}
