import { request as __request } from "../core/request";
export class ConversationLabels {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * List Labels
     * Lists all the labels of a conversation
     * @returns conversation_labels Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversation-Labels/operation/list-all-labels-of-a-conversation}
     */
    list({ accountId, conversationId, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/labels",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Conversation not found`,
            },
        });
    }
    /**
     * Add Labels
     * Add labels to a conversation. Note that this API would overwrite the existing list of labels associated to the conversation.
     * @returns conversation_labels Success
     * @throws ApiError
     * {@link https://www.chatwoot.com/developers/api/#tag/Conversation-Labels/operation/conversation-add-labels}
     */
    add({ accountId, conversationId, data, }) {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/labels",
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
//# sourceMappingURL=ConversationLabels.js.map