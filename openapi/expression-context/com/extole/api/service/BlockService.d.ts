export interface BlockService {
    isEmailBlocked(email: string): boolean;
    isEmailDomainBlocked(email: string): boolean;
    isIpBlocked(ip: string, subnets: string[]): boolean;
    isIpGloballyBlocked(ip: string): boolean;
}
