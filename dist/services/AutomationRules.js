import { request as __request } from "../core/request";
export class AutomationRule {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List all automation rules in an account
     * Get details of automation rules in an Account
     * @returns automation_rule Success
     * @throws ApiError
     */
    list({ accountId, page = 1, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/automation_rules",
            path: {
                account_id: accountId,
            },
            query: {
                page: page,
            },
            errors: {
                403: `Access denied`,
            },
        });
    }
    /**
     * Add a new automation rule
     * Add a new automation rule to account
     * @returns automation_rule Success
     * @throws ApiError
     */
    create({ accountId, data, }) {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/automation_rules",
            path: {
                account_id: accountId,
            },
            body: data,
            errors: {
                403: `Access denied`,
            },
        });
    }
    /**
     * Get a automation rule details
     * Get the details of a automation rule in the account
     * @returns automation_rule Success
     * @throws ApiError
     */
    get({ accountId, id, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/automation_rules/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given rule ID does not exist in the account`,
            },
        });
    }
    /**
     * Update automation rule in Account
     * Update a automation rule in account
     * @returns automation_rule Success
     * @throws ApiError
     */
    update({ accountId, id, data, }) {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/automation_rules/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Rule not found`,
            },
        });
    }
    /**
     * Remove a automation rule from account
     * Remove a automation rule from account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, id, }) {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/automation_rules/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `automation rule not found`,
            },
        });
    }
}
//# sourceMappingURL=AutomationRules.js.map