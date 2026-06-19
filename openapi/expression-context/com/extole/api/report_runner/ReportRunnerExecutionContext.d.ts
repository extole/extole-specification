import type { GlobalServices } from "../service/GlobalServices";
import type { ModelReportRunner } from "../model/ModelReportRunner";
import type { TimeRange } from "../report/configurable/TimeRange";

export interface ReportRunnerExecutionContext {
    getExecutionTimeSlot(): TimeRange;
    getGlobalServices(): GlobalServices;
    getReportRunner(): ModelReportRunner;
}
