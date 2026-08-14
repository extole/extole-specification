import type { OAuthResponse } from "./OAuthResponse";

export interface OAuthResponseBuilder {
    build(): OAuthResponse;
    withAccessToken(accessToken: string): OAuthResponseBuilder;
    withExpiresIn(expiresIn: number): OAuthResponseBuilder;
}
