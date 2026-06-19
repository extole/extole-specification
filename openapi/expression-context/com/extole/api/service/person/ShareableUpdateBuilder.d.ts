import type { PersonBuilder } from "./PersonBuilder";
import type { ShareableContentBuilder } from "./ShareableContentBuilder";

export interface ShareableUpdateBuilder {
    addData(name: string, value: string): ShareableUpdateBuilder;
    done(): PersonBuilder;
    getContentBuilder(): ShareableContentBuilder;
    removeData(name: string): ShareableUpdateBuilder;
    withKey(key: string): ShareableUpdateBuilder;
    withLabel(label: string): ShareableUpdateBuilder;
    withNoLabel(): ShareableUpdateBuilder;
}
