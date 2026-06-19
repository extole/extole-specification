export interface GlobService {
    globMatch(pattern: string | null, value: string | null): boolean;
}
