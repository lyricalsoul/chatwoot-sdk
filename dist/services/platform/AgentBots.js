import { request as __request } from "../../core/request";
export class AgentBots {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List all AgentBots
     * List all agent bots available
     * @returns agent_bot Success
     * @throws ApiError
     */
    list() {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/agent_bots",
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create an Agent Bot
     * Create an agent bot
     * @returns agent_bot Success
     * @throws ApiError
     */
    create({ data }) {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/platform/api/v1/agent_bots",
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get an agent bot details
     * Get the details of an agent bot
     * @returns agent_bot Success
     * @throws ApiError
     */
    get({ id, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/platform/api/v1/agent_bots/{id}",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given agent bot ID does not exist`,
            },
        });
    }
    /**
     * Update an agent bot
     * Update an agent bot's attributes
     * @returns agent_bot Success
     * @throws ApiError
     */
    update({ id, data, }) {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/platform/api/v1/agent_bots/{id}",
            path: {
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
     * Delete an AgentBot
     * @returns any Success
     * @throws ApiError
     */
    delete({ id, }) {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/platform/api/v1/agent_bots/{id}",
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `The agent bot does not exist`,
            },
        });
    }
}
//# sourceMappingURL=AgentBots.js.map