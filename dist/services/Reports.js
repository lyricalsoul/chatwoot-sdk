import { request as __request } from "../core/request";
export class Reports {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * Get Account reports
     * Get Account reports for a specific type, metric and date range
     * @returns any Success
     * @throws ApiError
     */
    list({ accountId, metric, type, id, since, until, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v2/accounts/{account_id}/reports",
            path: {
                account_id: accountId,
            },
            query: {
                metric: metric,
                type: type,
                id: id,
                since: since,
                until: until,
            },
            errors: {
                403: `Access denied`,
                404: `reports not found`,
            },
        });
    }
    /**
     * Get Account reports summary
     * Get Account reports summary for a specific type and date range
     * @returns account_summary Success
     * @throws ApiError
     */
    listSummaries({ accountId, type, id, since, until, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v2/accounts/{account_id}/reports/summary",
            path: {
                account_id: accountId,
            },
            query: {
                type: type,
                id: id,
                since: since,
                until: until,
            },
            errors: {
                403: `Access denied`,
                404: `reports not found`,
            },
        });
    }
    /**
     * Account Conversation Metrics
     * Get conversation metrics for Account
     * @returns any Success
     * @throws ApiError
     */
    getMetrics({ accountId, type, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v2/accounts/{account_id}/reports/conversations",
            path: {
                account_id: accountId,
            },
            query: {
                type: type,
            },
            errors: {
                403: `Access denied`,
                404: `reports not found`,
            },
        });
    }
    /**
     * Agent Conversation Metrics
     * Get conversation metrics for Agent
     * @returns agent_conversation_metrics Success
     * @throws ApiError
     */
    getAgentMetrics({ accountId, type, userId, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v2/accounts/{account_id}/reports/conversations/",
            path: {
                account_id: accountId,
            },
            query: {
                type: type,
                user_id: userId,
            },
            errors: {
                403: `Access denied`,
                404: `reports not found`,
            },
        });
    }
}
//# sourceMappingURL=Reports.js.map