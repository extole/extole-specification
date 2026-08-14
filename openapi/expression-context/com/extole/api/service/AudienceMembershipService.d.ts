export interface AudienceMembershipService {
    create(audienceId: string, personId: string): void;
    remove(audienceId: string, personId: string): void;
}
