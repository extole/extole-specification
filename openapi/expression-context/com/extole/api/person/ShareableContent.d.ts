export interface ShareableContent {
    getDescription(): string | null;
    getImageUrl(): string | null;
    getPartnerContentId(): string | null;
    getTitle(): string | null;
    getUrl(): string | null;
}
