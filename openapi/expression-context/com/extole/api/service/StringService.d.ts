export interface StringService {
    isBlank(value: string | null): boolean;
    isNotBlank(value: string | null): boolean;
    removeEnd(str: string, remove: string): string;
    split(value: string | null): string[];
    stripAccents(value: string): string;
}
