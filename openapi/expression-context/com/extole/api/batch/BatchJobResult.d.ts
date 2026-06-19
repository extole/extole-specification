export interface BatchJobResult {
    getCompletedDate(): string | null;
    getDebugMessage(): string | null;
    getErrorCode(): string | null;
    getErrorMessage(): string | null;
    getFailedRows(): number | null;
    getStartedDate(): string | null;
    getSuccessRows(): number | null;
}
