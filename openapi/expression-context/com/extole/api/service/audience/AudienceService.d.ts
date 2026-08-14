import type { AudienceAudience } from "../../audience/AudienceAudience";
import type { AudienceNotFoundException } from "./AudienceNotFoundException";

export interface AudienceService {
    getAll(): AudienceAudience[];
    /**
     * @throws {AudienceNotFoundException}
     */
    getById(audienceId: string): AudienceAudience;
}
