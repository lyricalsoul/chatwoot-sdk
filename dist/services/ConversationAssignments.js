import { request as __request } from "../core/request";
export class ConversationAssignment {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * Assign Conversation
     * Assign a conversation to an agent or a team
     * @returns user Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversation-Assignment/operation/assign-a-conversation}
     */
    assign({ accountId, conversationId, data, }) {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/assignments",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
                404: `Conversation not found`,
            },
        });
    }
}
//# sourceMappingURL=ConversationAssignments.js.map