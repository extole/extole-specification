import type { City } from "./City";
import type { Country } from "./Country";
import type { EventGeoipLocation } from "./EventGeoipLocation";
import type { State } from "./State";

export interface GeoIp {
    getAccuracyRadiusKm(): number | null;
    getCity(): City | null;
    getCountry(): Country | null;
    getIpAddress(): string;
    getLocation(): EventGeoipLocation | null;
    getState(): State | null;
    getZipCode(): string | null;
}
