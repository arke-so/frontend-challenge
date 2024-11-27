import { queryStoreToRequestObject } from '$utils/filters'
import { derived, writable } from 'svelte/store'

export type InfiniteQueryStore = {
  hasMore: boolean
  page: number
  search: string
}

function createInfiniteQueryStore() {
  const INITIAL_STATE = {
    hasMore: true,
    page: 0,
    search: '',
  }
  const { subscribe, update } = writable(INITIAL_STATE)

  function incrementPage() {
    update(state => ({
      ...state,
      page: state.page + 1,
    }))
  }

  function setSearch(search: string) {
    update(state => ({
      ...state,
      page: 0,
      hasMore: true,
      search,
    }))
  }

  function scrollEnd() {
    update(state => ({
      ...state,
      hasMore: false,
    }))
  }

  function reset() {
    update(() => INITIAL_STATE)
  }

  return {
    subscribe,
    incrementPage,
    scrollEnd,
    setSearch,
    reset,
  }
}

export const infiniteQueryStore = createInfiniteQueryStore()
export const hasMore = derived(infiniteQueryStore, $infiniteQueryStore => $infiniteQueryStore.hasMore)
export const pageQuery = derived(infiniteQueryStore, $infiniteQueryStore =>
  queryStoreToRequestObject($infiniteQueryStore),
)
