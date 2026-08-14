import type { GeoIp } from "../event/geoip/GeoIp";

export interface RequestContext {
    getCreatedAt(): string;
    getDeviceId(): string;
    getGeoIp(): GeoIp;
    getIp(): string;
}
