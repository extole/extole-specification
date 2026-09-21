import type { EmailMessageBuilder } from "./EmailMessageBuilder";
import type { NativeList } from "../../../../../native/collection/NativeList";
import type { NativeMap } from "../../../../../native/collection/NativeMap";

export interface EmailMessage {
    bcc(): NativeList<string>;
    body(): string;
    cc(): NativeList<string>;
    doNotSendReason(): string | null;
    equals(o: unknown): boolean;
    from(): string | null;
    hashCode(): number;
    headers(): NativeMap<string, string>;
    replyTo(): string | null;
    subject(): string;
    to(): string;
    toBuilder(): EmailMessageBuilder;
    toString(): string;
}
