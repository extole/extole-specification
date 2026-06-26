import type { StepActionContext } from "../StepActionContext";
import type { Webhook } from "../../../webhook/Webhook";

export interface WebhookActionContext extends StepActionContext {
    addLogMessage(logMessage: string): void;
    getWebhook(): Webhook;
}
