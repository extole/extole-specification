import type { FullPerson } from "../../../person/full/FullPerson";
import type { InternalConsumerEventBuilder } from "../../../event/internal/InternalConsumerEventBuilder";
import type { PersonContext } from "../../../PersonContext";
import type { RuntimeVariableContext } from "../../../RuntimeVariableContext";
import type { StepActionContext } from "../StepActionContext";
import type { VariableContext } from "../../../campaign/VariableContext";

export interface DisplayActionContext extends StepActionContext, PersonContext<FullPerson>, RuntimeVariableContext, VariableContext {
    getPerson(): FullPerson;
    internalConsumerEventBuilder(): InternalConsumerEventBuilder;
    isMobile(): boolean;
    isScraper(): boolean;
}
