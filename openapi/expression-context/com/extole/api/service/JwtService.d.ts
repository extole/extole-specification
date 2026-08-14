import type { JwtBuilder } from "./JwtBuilder";

export interface JwtService {
    createJwtBuilder(): JwtBuilder;
    isValid(jwt: string): boolean;
}
