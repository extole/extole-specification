import type { PublicClientDomain } from "../PublicClientDomain";

export interface PublicClientDomainService {
    getPublicClientDomains(): PublicClientDomain[];
}
