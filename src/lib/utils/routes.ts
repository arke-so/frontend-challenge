import { APP_BASE_PATH } from '$lib/fixtures/constants'

type RouteOptions = {
  useReferrer?: boolean
}

/**
 * Check if the given route is the current route
 * @param currentRouteId {string | null} - the current route id
 * @param routeId {string} - the route id to check
 * @returns {boolean} - true if the given route is the current route
 */
export function isCurrentRoute(currentRouteId: string | null, routeId: string): boolean {
  return currentRouteId === routeId
}

/**
 * Create a route by prepending the app base path to the given path
 * @param path {string} - the path to prepend
 * @returns {string} - the resulting path
 */
export function createRoute(path: string, options?: RouteOptions): string {
  const params = new URLSearchParams()
  if (options?.useReferrer) params.set('ref', 'true')
  const query = params.toString()

  if (path.startsWith(APP_BASE_PATH)) return path + (query ? `?${query}` : '')

  return `${APP_BASE_PATH}${path}${query ? `?${query}` : ''}`
}

export const appRootRouteId = () => createRoute('')
export const appRootRoute = () => createRoute('')

export const usersRouteId = () => createRoute('/users')
export const usersRoute = () => createRoute('/users')
