import type { EmailMessageBuilder } from "./EmailMessageBuilder";
import type { EmailV2ActionContentContext } from "./EmailV2ActionContentContext";
import type { NativeList } from "../../../../../native/collection/NativeList";
import type { NativeMap } from "../../../../../native/collection/NativeMap";

export interface EmailV2ActionResponseContext extends EmailV2ActionContentContext {
    getBcc(): NativeList<string>;
    getBody(): string;
    getCc(): NativeList<string>;
    getEmailMessageBuilder(): EmailMessageBuilder;
    getFrom(): string | null;
    getHeaders(): NativeMap<string, string>;
    getReplyTo(): string | null;
    getSubject(): string;
    getTo(): string;
}
