import type { NativeMap } from "../../../native/collection/NativeMap";
import type { Shareable } from "../../person/Shareable";
import type { ShareableContentBuilder } from "./ShareableContentBuilder";

export interface ShareableGetOrCreateBuilder {
    addData(name: string, value: string): ShareableGetOrCreateBuilder;
    complete(): Shareable;
    getContentBuilder(): ShareableContentBuilder;
    withClientDomainId(clientDomainId: string): ShareableGetOrCreateBuilder;
    withCode(code: string): ShareableGetOrCreateBuilder;
    withData(data: NativeMap<string, string>): ShareableGetOrCreateBuilder;
    withKey(key: string): ShareableGetOrCreateBuilder;
    withLabel(label: string): ShareableGetOrCreateBuilder;
    withNoLabel(): ShareableGetOrCreateBuilder;
    withPreferredCodePrefixes(preferredCodePrefixes: string[]): ShareableGetOrCreateBuilder;
}
