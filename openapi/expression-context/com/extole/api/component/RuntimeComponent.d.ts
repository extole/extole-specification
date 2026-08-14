export interface RuntimeComponent {
    getDescription(): string | null;
    getDisplayName(): string | null;
    getId(): string;
    getName(): string;
}
