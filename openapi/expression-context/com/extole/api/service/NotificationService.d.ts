import type { NotificationBuilder } from "./NotificationBuilder";

export interface NotificationService {
    createNotification(): NotificationBuilder;
    createNotification(notificationKey: string): NotificationBuilder;
}
