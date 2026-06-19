import type { EventData } from "./EventData";
import type { GeoIp } from "./geoip/GeoIp";
import type { NativeMap } from "../../native/collection/NativeMap";
import type { PublicClientDomain } from "../PublicClientDomain";
import type { Sandbox } from "./Sandbox";

export interface ProcessedRawEvent {
    getAllData(): EventData[];
    getAppData(): NativeMap<string, string>;
    getAppType(): string;
    getClientDomain(): PublicClientDomain;
    getData(): NativeMap<string, unknown>;
    getDeviceId(): string;
    getDeviceOs(): string;
    getDeviceType(): string;
    getEventName(): string;
    getEventTime(): string;
    getPageId(): string;
    getSandbox(): Sandbox;
    getSourceGeoIps(): GeoIp[];
    getVerifiedData(): NativeMap<string, unknown>;
}
