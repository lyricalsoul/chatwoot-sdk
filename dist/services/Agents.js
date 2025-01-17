import { request as __request } from "../core/request";
export class Agents {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List Agents in Account
     * Get Details of Agents in an Account
     * @returns agent Success
     * @throws ApiError
     */
    list({ accountId, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/agents",
            path: {
                account_id: accountId,
            },
            errors: {
                403: `Access denied`,
            },
        });
    }
    /**
     * Add a New Agent
     * Add a new Agent to Account
     * @returns agent Success
     * @throws ApiError
     */
    create({ accountId, data, }) {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/agents",
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
     * Update Agent in Account
     * Update an Agent in Account
     * @returns agent Success
     * @throws ApiError
     */
    update({ accountId, id, data, }) {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/agents/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                403: `Access denied`,
                404: `Agent not found`,
            },
        });
    }
    /**
     * Remove an Agent from Account
     * Remove an Agent from Account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, id, }) {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/agents/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                403: `Access denied`,
                404: `Agent not found`,
            },
        });
    }
}
//# sourceMappingURL=Agents.js.map