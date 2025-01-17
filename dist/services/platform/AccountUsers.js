import { request as __request } from "../../core/request";
export class AccountUsers {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List all Account Users
     * List all account users
     * @returns any Success
     * @throws ApiError
     */
    list({ accountId, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/accounts/{account_id}/account_users",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create an Account User
     * Create an Account User
     * @returns any Success
     * @throws ApiError
     */
    create({ accountId, data, }) {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/platform/api/v1/accounts/{account_id}/account_users",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Delete an Account User
     * Delete an Account User
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, data, }) {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/platform/api/v1/accounts/{account_id}/account_users",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
                404: `The account does not exist`,
            },
        });
    }
}
//# sourceMappingURL=AccountUsers.js.map