import type { BatchJobService } from "../service/BatchJobService";
import type { ClientContext } from "../ClientContext";
import type { GlobalServices } from "../service/GlobalServices";
import type { LoggerContext } from "../LoggerContext";
import type { Report } from "./Report";

export interface ReportPostHandlerActionContext extends LoggerContext {
    getBatchJobService(): BatchJobService;
    getClientContext(): ClientContext;
    getGlobalServices(): GlobalServices;
    getReport(): Report;
}
