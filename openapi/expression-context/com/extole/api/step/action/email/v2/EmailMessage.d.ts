import type { NativeList } from "../../../../../native/collection/NativeList";
import type { NativeMap } from "../../../../../native/collection/NativeMap";

export interface EmailMessage {
    bcc(): NativeList<string>;
    body(): string;
    cc(): NativeList<string>;
    doNotSendReason(): string;
    equals(o: unknown): boolean;
    from(): string;
    hashCode(): number;
    headers(): NativeMap<string, string>;
    replyTo(): string;
    subject(): string;
    to(): string;
    toString(): string;
}
