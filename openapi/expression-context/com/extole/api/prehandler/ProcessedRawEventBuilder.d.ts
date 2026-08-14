import type { NativeMap } from "../../native/collection/NativeMap";

export interface ProcessedRawEventBuilder {
    addAppData(data: NativeMap<string, string>): ProcessedRawEventBuilder;
    addAppData(name: string, value: string): ProcessedRawEventBuilder;
    addData(data: NativeMap<string, unknown>): ProcessedRawEventBuilder;
    addData(name: string, value: unknown): ProcessedRawEventBuilder;
    addJwt(jwt: string): ProcessedRawEventBuilder;
    addSourceGeoIp(ipAddress: string): ProcessedRawEventBuilder;
    addVerifiedData(name: string, value: unknown): ProcessedRawEventBuilder;
    removeAppData(name: string): ProcessedRawEventBuilder;
    removeData(name: string): ProcessedRawEventBuilder;
    removeSourceGeoIp(ipAddress: string): ProcessedRawEventBuilder;
    withAppType(appType: string): ProcessedRawEventBuilder;
    withClientDomain(clientDomain: string): ProcessedRawEventBuilder;
    withDefaultAppType(defaultAppType: string): ProcessedRawEventBuilder;
    withDeviceId(deviceId: string): ProcessedRawEventBuilder;
    withDeviceOs(deviceOs: string): ProcessedRawEventBuilder;
    withDeviceType(deviceType: string): ProcessedRawEventBuilder;
    withEventName(eventName: string): ProcessedRawEventBuilder;
    withEventTime(eventTime: string): ProcessedRawEventBuilder;
    withPageId(pageId: string): ProcessedRawEventBuilder;
    withSandbox(sandboxId: string): ProcessedRawEventBuilder;
}
