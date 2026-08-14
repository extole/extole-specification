import type { FullPerson } from "../../person/full/FullPerson";
import type { GlobalContext } from "../../GlobalContext";
import type { LoggerContext } from "../../LoggerContext";
import type { NativeMap } from "../../../native/collection/NativeMap";
import type { PersonContext } from "../../PersonContext";
import type { Sandbox } from "../../event/Sandbox";

export interface AsyncActionContext extends GlobalContext, PersonContext<FullPerson>, LoggerContext {
    getCampaignId(): string;
    getData(): NativeMap<string, unknown>;
    getProgramLabel(): string;
    getSandbox(): Sandbox;
}
