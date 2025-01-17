/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import axiosRetry from "axios-retry";
export const ChatwootAPI = {
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
//# sourceMappingURL=ChatwootAPI.js.map