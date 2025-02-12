import { request as __request } from "../../core/request";
export class ContactsApi {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * Create a contact
     * Create a contact
     * @returns public_contact Success
     * @throws ApiError
     */
    create({ inboxIdentifier, data, }) {
        return __request(this.chatwootAPI, {
            method: "POST",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts",
            path: {
                inbox_identifier: inboxIdentifier,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Get a contact
     * Get the details of a contact
     * @returns public_contact Success
     * @throws ApiError
     */
    get({ inboxIdentifier, contactIdentifier, }) {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
            },
            errors: {
                401: `Unauthorized`,
                404: `The given contact does not exist`,
            },
        });
    }
    /**
     * Update a contact
     * Update a contact's attributes
     * @returns public_contact Success
     * @throws ApiError
     */
    update({ inboxIdentifier, contactIdentifier, data, }) {
        return __request(this.chatwootAPI, {
            method: "PATCH",
            url: "/public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}",
            path: {
                inbox_identifier: inboxIdentifier,
                contact_identifier: contactIdentifier,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
//# sourceMappingURL=Contacts.js.map