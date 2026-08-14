import type { NativeList } from "../../../native/collection/NativeList";
import type { NativeMap } from "../../../native/collection/NativeMap";
import type { PersonBuilder } from "./PersonBuilder";
import type { ShareableContentBuilder } from "./ShareableContentBuilder";

export interface ShareableCreateBuilder {
    addData(name: string, value: string): ShareableCreateBuilder;
    done(): PersonBuilder;
    getContentBuilder(): ShareableContentBuilder;
    withClientDomainId(programId: string): ShareableCreateBuilder;
    withCode(code: string): ShareableCreateBuilder;
    withData(data: NativeMap<string, string>): ShareableCreateBuilder;
    withIgnoringNaughtyWords(): ShareableCreateBuilder;
    withKey(key: string): ShareableCreateBuilder;
    withLabel(label: string): ShareableCreateBuilder;
    withNoLabel(): ShareableCreateBuilder;
    withPreferredCodePrefixes(preferredCodePrefixes: NativeList<string>): ShareableCreateBuilder;
}
