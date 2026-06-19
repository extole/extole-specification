import type { Shareable } from "../person/Shareable";

export interface ShareableService {
    getByCode(code: string): Shareable | null;
}
