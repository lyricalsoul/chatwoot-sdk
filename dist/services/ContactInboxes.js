import { request as __request } from "../core/request";
export class Contact {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * Create contact inbox
     * Create a contact inbox record for an inbox
     * @returns contact_inboxes Success
     * @throws ApiError
     */
    create({ accountId, id, data, }) {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/api/v1/accounts/{account_id}/contacts/{id}/contact_inboxes",
            path: {
                account_id: accountId,
                id: id,
            },
            body: data,
            errors: {
                401: `Authentication error`,
                422: `Incorrect payload`,
            },
        });
    }
    /**
     * Get Contactable Inboxes
     * Get List of contactable Inboxes
     * @returns contactable_inboxes Success
     * @throws ApiError
     */
    getContactable({ accountId, id, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/accounts/{account_id}/contacts/{id}/contactable_inboxes",
            path: {
                account_id: accountId,
                id: id,
            },
            errors: {
                401: `Authentication error`,
                422: `Incorrect payload`,
            },
        });
    }
}
//# sourceMappingURL=ContactInboxes.js.map