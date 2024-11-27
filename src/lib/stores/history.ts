import { derived, writable } from 'svelte/store'

function createHistoryStore() {
  const INITIAL_STATE: Array<string> = []
  const { subscribe, update } = writable(INITIAL_STATE)

  function addEntry(nextPath: string | undefined) {
    if (!nextPath) return
    if (nextPath.endsWith('upsert')) return

    update(state => {
      if (state[state.length - 1] === nextPath) return state
      return [...state, nextPath]
    })
  }

  return {
    subscribe,
    addEntry,
  }
}

export const historyStore = createHistoryStore()
export const previousPage = derived(historyStore, $historyStore => $historyStore[$historyStore.length - 2])
