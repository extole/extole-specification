import type { BadDomainAndPathException } from "./BadDomainAndPathException";

export interface UrlService {
    /**
     * @throws {BadDomainAndPathException}
     */
    isUrlMatchingAnyOfTheDomainsAndPaths(url: string, domainsAndPaths: string[]): boolean;
}
