import type { ApiRequestOptions } from "./ApiRequestOptions";
import { CancelablePromise } from "./CancelablePromise";
import type { ChatwootAPIConfig } from "./ChatwootAPI";
import { Readable } from "stream";
/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
export declare const request: <T>(config: ChatwootAPIConfig, options: ApiRequestOptions) => CancelablePromise<T>;
export declare const bufferToStream: (value: Record<string, unknown>) => Readable;
export declare const decideOnStream: (value: Record<string, unknown>) => Readable;
