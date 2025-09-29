import type * as types from './types'
import { search } from './notion'
import { searchWithIntegration } from './notion-integration'

export async function handleSearchRequest(
  searchParams: types.SearchParams
): Promise<types.SearchResults> {
  try {
    const results = process.env.NOTION_TOKEN && !process.env.NOTION_TOKEN_V2
      ? await searchWithIntegration(searchParams)
      : await search(searchParams)

    return results
  } catch (error: any) {
    console.error('Search error:', error)
    
    // Check if it's an authentication error
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      const authError = new Error('Authentication failed. Please check your NOTION_TOKEN_V2 or NOTION_TOKEN environment variable.')
      authError.name = 'AuthenticationError'
      throw authError
    }
    
    const searchError = new Error(error?.message || 'Search failed')
    searchError.name = 'SearchError'
    throw searchError
  }
}