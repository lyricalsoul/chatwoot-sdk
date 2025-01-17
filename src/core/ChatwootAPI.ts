/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import axiosRetry, { AxiosRetry } from "axios-retry";
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

export const ChatwootAPI: ChatwootAPIConfig = {
    basePath: "https://app.chatwoot.com",
    with_credentials: false,
    credentials: "include",
    token: undefined,
    username: undefined,
    password: undefined,
    headers: undefined,
    encode_path: undefined,
    retry_options: {
        retries: 3,
        retryDelay: axiosRetry.exponentialDelay
    }
};
