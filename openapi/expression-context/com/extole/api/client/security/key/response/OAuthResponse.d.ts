export interface OAuthResponse {
    getAccessToken(): string;
    getExpiresIn(): number;
}
