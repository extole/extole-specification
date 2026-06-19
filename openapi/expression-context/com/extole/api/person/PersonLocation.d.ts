import type { GeoIp } from "../event/geoip/GeoIp";

export interface PersonLocation {
    getCreatedDate(): string;
    getDeviceId(): string;
    getGeoIp(): GeoIp;
}
