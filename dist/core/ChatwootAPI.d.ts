import type { ApiRequestOptions } from "./ApiRequestOptions";
type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;
export type ChatwootAPIConfig = {
    basePath: string;
    with_credentials: boolean;
    credentials: "include" | "omit" | "same-origin";
    token?: string | Resolver<string>;
    username?: string | Resolver<string>;
    password?: string | Resolver<string>;
    headers?: Headers | Resolver<Headers>;
    encode_path?: (path: string) => string;
    retry_options?: import("axios-retry").IAxiosRetryConfig;
};
export declare const ChatwootAPI: ChatwootAPIConfig;
export {};
