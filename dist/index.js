export { ApiError } from "./core/ApiError";
export { CancelablePromise, CancelError } from "./core/CancelablePromise";
export { ChatwootAPI } from "./core/ChatwootAPI";
import { AccountAgentBots } from "./services/AccountAgentBots";
import { Accounts } from "./services/platform/Accounts";
import { AccountUsers } from "./services/platform/AccountUsers";
import { AgentBots } from "./services/platform/AgentBots";
import { Agents } from "./services/Agents";
import { AutomationRule } from "./services/AutomationRules";
import { CannedResponses } from "./services/CannedResponses";
import { Contact } from "./services/ContactInboxes";
import { Contacts } from "./services/Contacts";
import { ContactsApi } from "./services/client/Contacts";
import { ConversationAssignment } from "./services/ConversationAssignments";
import { ConversationLabels } from "./services/ConversationLabels";
import { Conversations } from "./services/Conversations";
import { ConversationsApi } from "./services/client/Conversations";
import { CustomAttributes } from "./services/CustomAttributes";
import { CustomFilters } from "./services/CustomFilters";
import { Inboxes } from "./services/Inboxes";
import { Integrations } from "./services/Integrations";
import { Messages } from "./services/Messages";
import { MessagesApi } from "./services/client/Messages";
import { Profile } from "./services/Profile";
import { Reports } from "./services/Reports";
import { Teams } from "./services/Teams";
import { Users } from "./services/platform/Users";
import { Webhooks } from "./services/Webhooks";
export default class ChatwootClient {
    chatwootAPI;
    constructor({ config }) {
        this.chatwootAPI = config;
        this.client = {
            contacts: new ContactsApi({ config: config }),
            conversations: new ConversationsApi({ config: config }),
            messages: new MessagesApi({ config: config }),
        };
        this.platform = {
            accounts: new Accounts({ config: config }),
            accountUsers: new AccountUsers({ config: config }),
            agentBots: new AgentBots({ config: config }),
            users: new Users({ config: config }),
        };
        this.accountAgentBots = new AccountAgentBots({ config: config });
        this.agentBots = new AgentBots({ config: config });
        this.agents = new Agents({ config: config });
        this.automationRule = new AutomationRule({ config: config });
        this.cannedResponses = new CannedResponses({ config: config });
        this.contact = new Contact({ config: config });
        this.contacts = new Contacts({ config: config });
        this.customAttributes = new CustomAttributes({ config: config });
        this.conversationAssignment = new ConversationAssignment({ config: config });
        this.conversationLabels = new ConversationLabels({ config: config });
        this.conversations = new Conversations({ config: config });
        this.customFilters = new CustomFilters({ config: config });
        this.inboxes = new Inboxes({ config: config });
        this.integrations = new Integrations({ config: config });
        this.messages = new Messages({ config: config });
        this.profile = new Profile({ config: config });
        this.reports = new Reports({ config: config });
        this.teams = new Teams({ config: config });
        this.users = new Users({ config: config });
        this.webhooks = new Webhooks({ config: config });
    }
    client = {};
    platform = {};
    accountAgentBots;
    agentBots;
    agents;
    automationRule;
    cannedResponses;
    contact;
    contacts;
    conversationAssignment;
    conversationLabels;
    conversations;
    customAttributes;
    customFilters;
    inboxes;
    integrations;
    messages;
    profile;
    reports;
    teams;
    users;
    webhooks;
}
//# sourceMappingURL=index.js.map