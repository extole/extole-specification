import type { GlobalContext } from "../../GlobalContext";
import type { LoggerContext } from "../../LoggerContext";
import type { Webhook } from "../Webhook";
import type { WebhookDispatchResultEvent } from "../../event/webhook/WebhookDispatchResultEvent";

export interface WebhookResponseContext extends GlobalContext, LoggerContext {
    getVariable(variableName: string): unknown | null;
    getVariable(name: string, key: string): unknown | null;
    getVariable(name: string, keys: string[]): unknown | null;
    getWebhook(): Webhook;
    getWebhookDispatchResultEvent(): WebhookDispatchResultEvent;
}
