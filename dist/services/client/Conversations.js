import { request as __request } from "../../core/request";
export class ConversationsApi {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * Create a conversation
     * Create a conversation
     * @returns public_conversation Success
     * @throws ApiError
     */
    create({ inboxIdentifier, contactIdentifier, }) {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * List all conversations
     * List all conversations for the contact
     * @returns public_conversation Success
     * @throws ApiError
     */
    list({ inboxIdentifier, contactIdentifier, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
//# sourceMappingURL=Conversations.js.map