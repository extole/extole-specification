import type { ClientContext } from "./ClientContext";
import type { GlobalServices } from "./service/GlobalServices";

export interface GlobalContext {
    getClientContext(): ClientContext;
    getGlobalServices(): GlobalServices;
}
