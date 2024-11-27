import type { InfiniteQueryStore } from '$stores/filters'

export const DEFAULT_ITEMS_LIMIT: number = 50

export interface FilterQuery {
  search?: string
  limit?: number
  offset?: number
}

/**
 * Extracts query from URL object
 * @param url {URL} - URL object to extract query from
 * @returns FilterQuery - Query object
 */
export function getQueryFromURL(url: URL): FilterQuery {
  const search = url.searchParams.get('search') || ''
  return { search }
}

/**
 * Checks if query is active
 * @param query {FilterQuery} - Query object
 * @returns boolean - Whether the query is active
 */
export function isQueryActive(query: FilterQuery): boolean {
  return !!query.search || !!query.limit || !!query.offset
}

/**
 * Creates request object from query
 * @param query {FilterQuery} - Query object
 * @returns object - Request object
 */
export function createQueryRequestObject({ search, limit = DEFAULT_ITEMS_LIMIT, offset }: FilterQuery) {
  return {
    ...(search?.trim() !== '' ? { search } : {}),
    ...(limit ? { limit } : {}),
    ...(offset ? { offset } : {}),
  }
}

/**
 * Converts query store to request object
 * @param queryStore {InfiniteQueryStore} - Query store
 * @returns object - Request object
 */
export function queryStoreToRequestObject(queryStore: InfiniteQueryStore) {
  return createQueryRequestObject({
    search: queryStore.search,
    limit: DEFAULT_ITEMS_LIMIT,
    offset: queryStore.page * DEFAULT_ITEMS_LIMIT,
  })
}
