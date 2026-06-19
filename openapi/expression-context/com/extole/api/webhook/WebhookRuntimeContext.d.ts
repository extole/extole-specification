import type { ClientKeyApiException } from "../client/security/key/ClientKeyApiException";
import type { LoggerContext } from "../LoggerContext";
import type { RuntimeVariableContext } from "../RuntimeVariableContext";
import type { Webhook } from "./Webhook";
import type { WebhookRequestBuilder } from "./WebhookRequestBuilder";

export interface WebhookRuntimeContext extends LoggerContext, RuntimeVariableContext {
    addLogMessage(logMessage: string): void;
    createRequestBuilder(): WebhookRequestBuilder;
    /**
     * @throws {ClientKeyApiException}
     */
    createRequestBuilderWithDefaults(): WebhookRequestBuilder;
    getAttemptCount(): number;
    getWebhook(): Webhook;
}
