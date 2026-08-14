export interface OAuthClientCredentials {
    getAuthorizationUrl(): string;
    getOAuthClientId(): string;
    getOAuthClientSecret(): string;
    getScope(): string | null;
}
