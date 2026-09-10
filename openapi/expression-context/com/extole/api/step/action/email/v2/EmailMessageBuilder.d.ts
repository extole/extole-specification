import type { EmailMessage } from "./EmailMessage";
import type { NativeList } from "../../../../../native/collection/NativeList";
import type { NativeMap } from "../../../../../native/collection/NativeMap";

export interface EmailMessageBuilder {
    build(): EmailMessage;
    withBcc(bcc: NativeList<string>): EmailMessageBuilder;
    withBody(body: string): EmailMessageBuilder;
    withCc(cc: NativeList<string>): EmailMessageBuilder;
    withDoNotSendReason(doNotSendReason: string): EmailMessageBuilder;
    withFrom(from: string): EmailMessageBuilder;
    withHeaders(headers: NativeMap<string, string>): EmailMessageBuilder;
    withReplyTo(replyTo: string): EmailMessageBuilder;
    withSubject(subject: string): EmailMessageBuilder;
    withTo(to: string): EmailMessageBuilder;
}
