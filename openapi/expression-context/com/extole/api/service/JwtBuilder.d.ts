import type { JwtBuilderException } from "./JwtBuilderException";
import type { NativeList } from "../../native/collection/NativeList";

export interface JwtBuilder {
    /**
     * @throws {JwtBuilderException}
     */
    build(): string;
    /**
     * @throws {JwtBuilderException}
     */
    signWithKeyByClientKeyId(extoleClientKeyId: string): JwtBuilder;
    /**
     * @throws {JwtBuilderException}
     */
    signWithKeyByPartnerKeyId(partnerKeyId: string): JwtBuilder;
    withAudience(audience: string): JwtBuilder;
    withAudiences(audienceList: NativeList<string>): JwtBuilder;
    /**
     * @throws {JwtBuilderException}
     */
    withClientKeyId(clientKeyId: string): JwtBuilder;
    withCustomClaim(name: string, value: unknown): JwtBuilder;
    /**
     * @throws {JwtBuilderException}
     */
    withEncryptionMethod(encryptionMethod: string): JwtBuilder;
    withExpirationDate(secondsSince1970: number): JwtBuilder;
    withHeaderParameter(name: string, value: string): JwtBuilder;
    withIssuedAt(secondsSince1970: number): JwtBuilder;
    withIssuer(issuer: string): JwtBuilder;
    withJwtId(jwtId: string): JwtBuilder;
    withNotBefore(secondsSince1970: number): JwtBuilder;
    withSubject(subject: string): JwtBuilder;
}
