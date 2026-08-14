export interface RandomService {
    randomInt(startInclusive: number, endExclusive: number): number;
    randomString(count: number, allowedCharacters: string): string;
    randomStringAlphabetic(count: number): string;
}
