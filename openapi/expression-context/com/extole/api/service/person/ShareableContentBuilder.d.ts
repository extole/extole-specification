import type { PersonBuilderException } from "./PersonBuilderException";

export interface ShareableContentBuilder {
    withDescription(description: string): ShareableContentBuilder;
    /**
     * @throws {PersonBuilderException}
     */
    withImageUrl(imageUrl: string): ShareableContentBuilder;
    withPartnerContentId(partnerContentId: string): ShareableContentBuilder;
    withTitle(title: string): ShareableContentBuilder;
    /**
     * @throws {PersonBuilderException}
     */
    withUrl(url: string): ShareableContentBuilder;
}
