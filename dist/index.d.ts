export { ApiError } from "./core/ApiError";
export { CancelablePromise, CancelError } from "./core/CancelablePromise";
export { ChatwootAPI } from "./core/ChatwootAPI";
export type { ChatwootAPIConfig } from "./core/ChatwootAPI";
export type { account } from "./models/account";
export type { account_create_update_payload } from "./models/account_create_update_payload";
export type { account_summary } from "./models/account_summary";
export type { agent } from "./models/agent";
export type { agent_bot } from "./models/agent_bot";
export type { agent_bot_create_update_payload } from "./models/agent_bot_create_update_payload";
export type { agent_conversation_metrics } from "./models/agent_conversation_metrics";
export type { automation_rule } from "./models/automation_rule";
export type { automation_rule_create_update_payload } from "./models/automation_rule_create_update_payload";
export type { bad_request_error } from "./models/bad_request_error";
export type { canned_response } from "./models/canned_response";
export type { canned_response_create_update_payload } from "./models/canned_response_create_update_payload";
export type { contact } from "./models/contact";
export type { contact_base } from "./models/contact_base";
export type { contact_conversations } from "./models/contact_conversations";
export type { contact_create } from "./models/contact_create";
export type { contact_inboxes } from "./models/contact_inboxes";
export type { contact_list } from "./models/contact_list";
export type { contact_update } from "./models/contact_update";
export type { contactable_inboxes } from "./models/contactable_inboxes";
export type { conversation } from "./models/conversation";
export type { conversation_labels } from "./models/conversation_labels";
export type { conversation_list } from "./models/conversation_list";
export type { conversation_message_create } from "./models/conversation_message_create";
export type { conversation_show } from "./models/conversation_show";
export type { conversation_status_toggle } from "./models/conversation_status_toggle";
export type { custom_attribute } from "./models/custom_attribute";
export type { custom_attribute_create_update_payload } from "./models/custom_attribute_create_update_payload";
export type { custom_filter } from "./models/custom_filter";
export type { custom_filter_create_update_payload } from "./models/custom_filter_create_update_payload";
export type { extended_contact } from "./models/extended_contact";
export type { extended_message } from "./models/extended_message";
export type { generic_id } from "./models/generic_id";
export type { inbox } from "./models/inbox";
export type { integrations_app } from "./models/integrations_app";
export type { integrations_hook } from "./models/integrations_hook";
export type { integrations_hook_create_payload } from "./models/integrations_hook_create_payload";
export type { integrations_hook_update_payload } from "./models/integrations_hook_update_payload";
export type { message } from "./models/message";
export type { platform_account } from "./models/platform_account";
export type { public_contact } from "./models/public_contact";
export type { public_contact_create_update_payload } from "./models/public_contact_create_update_payload";
export type { public_conversation } from "./models/public_conversation";
export type { public_message } from "./models/public_message";
export type { public_message_create_payload } from "./models/public_message_create_payload";
export type { public_message_update_payload } from "./models/public_message_update_payload";
export type { request_error } from "./models/request_error";
export type { team } from "./models/team";
export type { team_create_update_payload } from "./models/team_create_update_payload";
export type { user } from "./models/user";
export type { user_create_update_payload } from "./models/user_create_update_payload";
export type { webhook } from "./models/webhook";
export type { webhook_create_update_payload } from "./models/webhook_create_update_payload";
import { AccountAgentBots } from "./services/AccountAgentBots";
import { AgentBots } from "./services/platform/AgentBots";
import { Agents } from "./services/Agents";
import { AutomationRule } from "./services/AutomationRules";
import { CannedResponses } from "./services/CannedResponses";
import { Contact } from "./services/ContactInboxes";
import { Contacts } from "./services/Contacts";
import { ConversationAssignment } from "./services/ConversationAssignments";
import { ConversationLabels } from "./services/ConversationLabels";
import { Conversations } from "./services/Conversations";
import { CustomAttributes } from "./services/CustomAttributes";
import { CustomFilters } from "./services/CustomFilters";
import { Inboxes } from "./services/Inboxes";
import { Integrations } from "./services/Integrations";
import { Messages } from "./services/Messages";
import { Profile } from "./services/Profile";
import { Reports } from "./services/Reports";
import { Teams } from "./services/Teams";
import { Users } from "./services/platform/Users";
import { Webhooks } from "./services/Webhooks";
import { ChatwootAPIConfig } from "./core/ChatwootAPI";
export default class ChatwootClient {
    private chatwootAPI;
    constructor({ config }: {
        config: ChatwootAPIConfig;
    });
    client: {};
    platform: {};
    accountAgentBots: AccountAgentBots;
    agentBots: AgentBots;
    agents: Agents;
    automationRule: AutomationRule;
    cannedResponses: CannedResponses;
    contact: Contact;
    contacts: Contacts;
    conversationAssignment: ConversationAssignment;
    conversationLabels: ConversationLabels;
    conversations: Conversations;
    customAttributes: CustomAttributes;
    customFilters: CustomFilters;
    inboxes: Inboxes;
    integrations: Integrations;
    messages: Messages;
    profile: Profile;
    reports: Reports;
    teams: Teams;
    users: Users;
    webhooks: Webhooks;
}
