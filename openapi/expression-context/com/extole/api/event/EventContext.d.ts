import type { GeoIp } from "./geoip/GeoIp";

export interface EventContext {
    getAppType(): string | null;
    getSourceGeoIps(): GeoIp[];
    getUserId(): string | null;
    isAdminApi(): boolean;
}
