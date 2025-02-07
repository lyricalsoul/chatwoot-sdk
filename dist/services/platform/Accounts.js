import { request as __request } from "../../core/request";
export class Accounts {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * Create an Account
     * Create an Account
     * @returns platform_account Success
     * @throws ApiError
     */
    create({ data }) {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/platform/api/v1/accounts",
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get an account details
     * Get the details of an account
     * @returns platform_account Success
     * @throws ApiError
     */
    get({ accountId, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/accounts/{account_id}",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given account does not exist`,
            },
        });
    }
    /**
     * Update an account
     * Update an account's attributes
     * @returns platform_account Success
     * @throws ApiError
     */
    update({ accountId, data, }) {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/platform/api/v1/accounts/{account_id}",
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
     * Delete an Account
     * Delete an Account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, }) {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/platform/api/v1/accounts/{account_id}",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The account does not exist`,
            },
        });
    }
}
//# sourceMappingURL=Accounts.js.map