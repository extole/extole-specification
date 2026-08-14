import type { ClientKey } from "../client/security/key/ClientKey";
import type { ComponentReference } from "../component/ComponentReference";

export interface Webhook {
    getClientKey(): ClientKey | null;
    getComponentReferences(): ComponentReference[];
    getDefaultMethod(): string;
    getUrl(): string;
}
