import { useState, useCallback } from 'react'
import { searchNotion } from '../search-notion'
import type * as types from '../types'

export function useSearch() {
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<types.SearchResults | null>(null)
  const [searchError, setSearchError] = useState<string | null>(null)

  const search = useCallback(async (params: types.SearchParams) => {
    if (!params.query?.trim()) {
      setSearchResults(null)
      return
    }

    setIsSearching(true)
    setSearchError(null)
    
    try {
      const results = await searchNotion(params)
      setSearchResults(results)
    } catch (error: any) {
      setSearchError(error.message || 'Search failed')
      setSearchResults(null)
    } finally {
      setIsSearching(false)
    }
  }, [])

  const clearSearch = useCallback(() => {
    setSearchResults(null)
    setSearchError(null)
  }, [])

  return {
    search,
    clearSearch,
    isSearching,
    searchResults,
    searchError
  }
}