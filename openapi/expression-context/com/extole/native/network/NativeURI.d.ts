export interface NativeURI {
    getAuthority(): string | null;
    getFragment(): string | null;
    getHost(): string | null;
    getPath(): string | null;
    getPort(): number;
    getQuery(): string | null;
    getRawAuthority(): string | null;
    getRawFragment(): string | null;
    getRawPath(): string | null;
    getRawQuery(): string | null;
    getRawSchemeSpecificPart(): string;
    getRawUserInfo(): string | null;
    getScheme(): string | null;
    getSchemeSpecificPart(): string;
    getUserInfo(): string | null;
    isAbsolute(): boolean;
    isOpaque(): boolean;
    normalize(): NativeURI;
    parseServerAuthority(): NativeURI;
    relativize(uri: NativeURI): NativeURI;
    resolve(uri: NativeURI): NativeURI;
    resolve(str: string): NativeURI;
    toASCIIString(): string;
    toString(): string;
}
