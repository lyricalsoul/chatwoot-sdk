import { request as __request, decideOnStream } from "../core/request";
/**
 * Messages calls from Platform API
 */
export class Messages {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * Get messages
     * List all messages of a conversation
     * @returns any Success
     * @throws ApiError
     */
    list({ accountId, conversationId, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages",
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
     * Create New Message
     * Create a new message in the conversation
     * @returns any Success
     * @throws ApiError
     */
    create({ accountId, conversationId, data, }) {
        const { attachments, ...clone } = data;
        let files;
        if (attachments) {
            files = attachments.map((value) => {
                return {
                    content: decideOnStream(value),
                    filename: value?.filename,
                };
            });
        }
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
            },
            formData: { ...clone, attachments: files },
            errors: {
                403: `Access denied`,
                404: `Conversation not found`,
            },
        });
    }
    /**
     * Update a Message
     * Update a message in the conversation
     * @returns any Success
     * @throws ApiError
     */
    update({ accountId, conversationId, data, messageId, }) {
        const { attachments, ...clone } = data;
        let files;
        if (attachments) {
            files = attachments.map((value) => {
                return {
                    content: decideOnStream(value),
                    filename: value?.filename,
                };
            });
        }
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
                message_id: messageId,
            },
            formData: { ...clone, attachments: files },
            errors: {
                403: `Access denied`,
                404: `Conversation not found`,
            },
        });
    }
    /**
     * Delete a message
     * Delete a message and it's attachments from the conversation.
     * @returns any Success
     * @throws ApiError
     */
    delete({ accountId, conversationId, messageId, }) {
        return __request(this.chatwootAPI, {
            method: "DELETE",
            url: "/api/v1/accounts/{account_id}/conversations/{conversation_id}/messages/{message_id}",
            path: {
                account_id: accountId,
                conversation_id: conversationId,
                message_id: messageId,
            },
            errors: {
                401: `Unauthorized`,
                404: `The message or conversation does not exist in the account`,
            },
        });
    }
}
//# sourceMappingURL=Messages.js.map