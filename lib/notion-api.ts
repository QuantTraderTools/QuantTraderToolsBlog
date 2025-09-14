import { NotionAPI } from 'notion-client'

// Support private Notion workspaces by reading an auth token from env.
// Prefer NOTION_TOKEN_V2 (cookie value), fallback to NOTION_TOKEN if provided.
const authToken = process.env.NOTION_TOKEN_V2 || process.env.NOTION_TOKEN

export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL,
  authToken
})