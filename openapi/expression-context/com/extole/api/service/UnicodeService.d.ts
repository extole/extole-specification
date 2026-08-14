export interface UnicodeService {
    isNfdNormalized(src: string): boolean;
    nfdNormalized(src: string): string;
}
