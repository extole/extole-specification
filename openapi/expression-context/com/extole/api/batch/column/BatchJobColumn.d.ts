import type { BatchJobColumnType } from "./BatchJobColumnType";
import type { BatchJobColumnValidationPolicy } from "./BatchJobColumnValidationPolicy";

export interface BatchJobColumn {
    getPrefix(): string | null;
    getType(): BatchJobColumnType;
    getValidationPolicy(): BatchJobColumnValidationPolicy;
}
