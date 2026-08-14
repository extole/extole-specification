export interface NotificationBuilder {
    addParameter(name: string, value: string): NotificationBuilder;
    addTag(tag: string): NotificationBuilder;
    send(): void;
    withLevel(level: string): NotificationBuilder;
    withMessage(message: string): NotificationBuilder;
    withName(name: string): NotificationBuilder;
    withScope(scope: string): NotificationBuilder;
}
