import { request as __request } from "../core/request";
export class AccountAgentBots {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List all AgentBots
     * List all agent bots available for the current account
     * @returns agent_bot Success
     * @throws ApiError
     */
    list({ accountId, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/agent_bots",
            path: {
                account_id: accountId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create an Agent Bot
     * Create an agent bot in the account
     * @returns agent_bot Success
     * @throws ApiError
     */
    create({ accountId, data, }) {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/agent_bots",
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
     * Get an agent bot details
     * Get the details of an agent bot in the account
     * @returns agent_bot Success
     * @throws ApiError
     */
    get({ accountId, id, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/agent_bots/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given agent bot ID does not exist in the account`,
            },
        });
    }
    /**
     * Update an agent bot
     * Update an agent bot's attributes
     * @returns agent_bot Success
     * @throws ApiError
     */
    update({ accountId, id, data, }) {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/agent_bots/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Delete an AgentBot
     * Delete an AgentBot from the account
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, id, }) {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/agent_bots/{id}",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The agent bot does not exist in the account`,
            },
        });
    }
}
//# sourceMappingURL=AccountAgentBots.js.map