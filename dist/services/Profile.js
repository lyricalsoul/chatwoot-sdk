import { request as __request } from "../core/request";
export class Profile {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
    }
    /**
     * Fetch user profile
     * Get the user profile details
     * @returns user Success
     * @throws ApiError
     */
    profile() {
        return __request(this.chatwootAPI, {
            method: "GET",
            url: "/api/v1/profile",
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
//# sourceMappingURL=Profile.js.map