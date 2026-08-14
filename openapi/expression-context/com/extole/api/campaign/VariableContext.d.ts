import type { GlobalContext } from "../GlobalContext";

export interface VariableContext extends GlobalContext {
    get(name: string): unknown | null;
    get(name: string, key: string): unknown | null;
    get(name: string, keys: string[]): unknown | null;
}
